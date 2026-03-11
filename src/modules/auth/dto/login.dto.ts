import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @ApiProperty({ description: 'Correo del Usuario', example: 'user1@example.com' })
    @IsEmail({}, { message: 'Debe ser un correo válido' })
    email: string;

    @ApiProperty({ description: 'Contraseña del Usuario', example: 'password123' })
    @IsString()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;
}
