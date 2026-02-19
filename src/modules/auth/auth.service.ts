import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BcryptService } from 'src/common/services/bcrypt.service';
import { ConsoleNotificationService } from 'src/common/services/console-notification.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterFullDto } from './dto/register-full.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaService,
        private readonly hashingService: BcryptService,
        private readonly notificationService: ConsoleNotificationService,
    ) { }

    // 1. Generar OTP de 4 dígitos
    private generateOTP(): string {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }

    // 2. Generar el Token JWT
    private generateToken(payload: { sub: number; email: string }) {
        return this.jwtService.sign(payload);
    }

    async login(dto: LoginDto) {
        const { email, password } = dto;

        // 1. Buscar usuario por email
        const user = await this.prisma.user.findUnique({
            where: { email },
        });

        // 2. Error genérico por seguridad (no decir si el correo existe o no)
        if (!user) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        // 3. Comparar contraseñas usando Bcrypt
        const isPasswordValid = await this.hashingService.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        // 4. (Opcional) Verificar si la cuenta está activa
        if (!user.isVerified) {
            throw new ForbiddenException('Por favor, verifica tu cuenta con el código OTP enviado');
        }

        // 5. Generar Token
        const token = this.generateToken({ sub: user.id, email: user.email });

        const { password: _, otpCode, otpExpires, ...userResult } = user;

        return {
            user: userResult,
            access_token: token,
        };
    }

    async register(dto: RegisterFullDto) {
        const { user, vehicle } = dto;

        return await this.prisma.$transaction(async (tx) => {
            // 1. Validaciones de unicidad (SRP)
            await this.validateRegistrationUniqueness(tx, dto);

            const otp = this.generateOTP();
            const expires = new Date();
            expires.setMinutes(expires.getMinutes() + 10);

            // 2. Crear el usuario
            const newUser = await tx.user.create({
                data: {
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    password: await this.hashingService.hash(user.password),
                    otpCode: otp,
                    otpExpires: expires,
                    isVerified: false,
                },
            });

            // 3. Crear el vehículo
            const newVehicle = await tx.vehicle.create({
                data: {
                    make: vehicle.make,
                    model: vehicle.model,
                    plate: vehicle.plate,
                    initialMileage: vehicle.initialMileage,
                    userId: newUser.id,
                    currentMileage: vehicle.initialMileage,
                    lastServiceMileage: vehicle.initialMileage,
                    lastServiceDate: vehicle.lastServiceDate ? new Date(vehicle.lastServiceDate) : new Date(),
                },
            });

            await this.notificationService.sendOTP(newUser.phone, otp);

            const token = this.generateToken({ sub: newUser.id, email: newUser.email });

            return {
                user: { id: newUser.id, email: newUser.email, username: newUser.username },
                vehicle: newVehicle,
                access_token: token,
            };
        });
    }

    async verifyOtp(dto: VerifyOtpDto) {
        const { email, code } = dto;

        // 1. Buscar al usuario
        const user = await this.prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            throw new NotFoundException('Usuario no encontrado');
        }

        // 2. Verificar si ya está verificado
        if (user.isVerified) {
            throw new BadRequestException('El usuario ya se encuentra verificado');
        }

        // 3. Validar el código y la expiración
        const now = new Date();
        if (user.otpCode !== code || (user.otpExpires && now > user.otpExpires)) {
            throw new UnauthorizedException('Código inválido o expirado');
        }

        // 4. Marcar como verificado y limpiar el OTP
        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                isVerified: true,
                otpCode: null, // Limpiamos para que no se use de nuevo
                otpExpires: null,
            },
        });

        return {
            message: 'Cuenta verificada exitosamente',
        };
    }

    // --- Métodos Privados de Soporte (SOLID / Clean Code) ---

    private async validateRegistrationUniqueness(tx: any, dto: RegisterFullDto) {
        const { user, vehicle } = dto;

        await Promise.all([
            this.checkExists(tx.user, { email: user.email }, 'El correo electrónico ya está registrado.'),
            this.checkExists(tx.user, { username: user.username }, 'El nombre de usuario ya está registrado.'),
            this.checkExists(tx.vehicle, { plate: vehicle.plate }, 'La placa del vehículo ya está registrada.'),
        ]);
    }

    private async checkExists(model: any, where: object, message: string) {
        const exists = await model.findUnique({ where });
        if (exists) {
            throw new ConflictException(message);
        }
    }
}
