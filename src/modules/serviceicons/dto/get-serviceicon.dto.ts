import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetServiceIconDto {
  @ApiProperty({ description: 'ID único del icono', example: 1 })
  @IsInt({ message: 'El ID debe ser un número entero' })
  @Min(1, { message: 'El ID debe ser mayor a 0' })
  @Type(() => Number) // Convierte el valor a número (crucial para params de URL)
  id: number;
}