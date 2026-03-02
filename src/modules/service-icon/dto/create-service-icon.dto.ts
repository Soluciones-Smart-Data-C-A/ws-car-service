import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceIconDto {
    @ApiProperty({ example: 'Cambio de Aceite', description: 'Nombre descriptivo del ícono' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'oil_change', description: 'Identificador del ícono en la app (Flutter)' })
    @IsString()
    @IsNotEmpty()
    icon: string;
}
