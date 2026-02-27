import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateServiceIconDto } from './create-serviceicon.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateServiceIconDto extends PartialType(CreateServiceIconDto) {
  @ApiProperty({ description: 'ID del icono que se va a actualizar', example: 1 })
  @IsInt()
  @IsNotEmpty()
  id: number;
}