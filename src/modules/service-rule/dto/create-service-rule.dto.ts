import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceRuleDto {
  @ApiProperty({
    example: 'Cambio de Aceite',
    description: 'Nombre de la regla de mantenimiento',
  })
  @IsString()
  @IsNotEmpty()
  serviceName: string;

  @ApiProperty({
    example: 5000,
    description: 'Frecuencia en kilómetros para aplicar este servicio',
  })
  @IsInt()
  @Min(1)
  frequencyKm: number;

  @ApiProperty({ example: 1, description: 'ID del ícono visual de servicio' })
  @IsInt()
  @Min(1)
  iconId: number;
}
