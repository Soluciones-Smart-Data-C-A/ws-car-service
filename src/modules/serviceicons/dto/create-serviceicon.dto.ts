import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceIconDto {
  @ApiProperty({ example: 'Cambio de Aceite' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiProperty({ example: 'oil_change' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  icon: string;
}