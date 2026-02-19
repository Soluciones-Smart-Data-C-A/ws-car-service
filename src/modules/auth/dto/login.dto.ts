import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @ApiProperty({ description: 'Correo electrónico del usuario', example: 'usuario@correo.com' })
    @IsEmail({}, { message: 'Debe ser un correo válido' })
    email: string;

    @ApiProperty({ description: 'Contraseña del usuario', example: '123456' })
    @IsString()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;
}