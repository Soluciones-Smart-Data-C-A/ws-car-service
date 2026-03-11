import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty({
    example: 'Cambio de Aceite',
    description: 'Nombre detallado del servicio a realizar',
  })
  @IsString()
  @IsNotEmpty()
  serviceName: string;

  @ApiProperty({ example: 1, description: 'ID del ícono de servicio asociado' })
  @IsInt()
  @Min(1)
  iconId: number;
}
