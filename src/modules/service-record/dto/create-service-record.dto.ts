import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateServiceRecordDto {
    @ApiProperty({ example: 1, description: 'ID del vehículo al que se le aplicó el servicio' })
    @IsInt()
    @Min(1)
    vehicleId: number;

    @ApiProperty({ example: 2, description: 'ID del servicio realizado' })
    @IsInt()
    @Min(1)
    serviceId: number;

    @ApiProperty({ example: 45000, description: 'Kilometraje del vehículo al momento de realizar el servicio' })
    @IsInt()
    @Min(0)
    mileage: number;

    @ApiPropertyOptional({ example: '2023-10-27T10:00:00Z', description: 'Fecha del servicio (ISO 8601). Si se omite, se usa la fecha actual.' })
    @IsOptional()
    @IsString()
    date?: string;

    @ApiPropertyOptional({ example: 'Se cambiaron las bujías adicionalmente', description: 'Notas u observaciones del servicio' })
    @IsOptional()
    @IsString()
    notes?: string;
}
