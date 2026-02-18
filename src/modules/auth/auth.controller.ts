import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterFullDto } from './dto/register-full.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @ApiOperation({ summary: 'Inicio de sesión de un usuario ya registrado' })
    @ApiResponse({ status: 201, description: 'el usuario ha iniciado sesión exitosamente.' })
    @ApiResponse({ status: 400, description: 'Datos de inicio de sesión inválidos.' })
    async login(@Body() loginDto: LoginDto) {
        return await this.authService.login(loginDto);
    }

    @Post('register')
    @ApiOperation({ summary: 'Registrar un nuevo usuario junto con su vehículo' })
    @ApiResponse({ status: 201, description: 'Usuario y vehículo registrados exitosamente.' })
    @ApiResponse({ status: 400, description: 'Datos de registro inválidos.' })
    async register(@Body() registerFullDto: RegisterFullDto) {
        return await this.authService.register(registerFullDto);
    }

    @Post('verify-otp')
    @ApiOperation({ summary: 'Verificar el código OTP enviado al correo' })
    @ApiResponse({ status: 200, description: 'OTP verificado exitosamente.' })
    @ApiResponse({ status: 400, description: 'Código OTP o correo inválidos.' })
    async verifyOtp(@Body() verifyOtpDto: VerifyOtpDto) {
        return await this.authService.verifyOtp(verifyOtpDto);
    }
}
