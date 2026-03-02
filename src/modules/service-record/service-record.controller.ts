import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ServiceRecordService } from './service-record.service';
import { CreateServiceRecordDto } from './dto/create-service-record.dto';
import { UpdateServiceRecordDto } from './dto/update-service-record.dto';

@ApiTags('Service Records')
@Controller('service-records')
export class ServiceRecordController {
    constructor(private readonly serviceRecordService: ServiceRecordService) { }

    @Post()
    @ApiOperation({ summary: 'Registrar un nuevo servicio para un vehículo' })
    @ApiResponse({ status: 201, description: 'Registro de servicio creado exitosamente.' })
    create(@Body() createServiceRecordDto: CreateServiceRecordDto) {
        return this.serviceRecordService.create(createServiceRecordDto);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener todo el historial de servicios de todos los vehículos' })
    @ApiResponse({ status: 200, description: 'Lista de registros de servicios.' })
    findAll() {
        return this.serviceRecordService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un registro de servicio por su ID' })
    @ApiResponse({ status: 200, description: 'Registro de servicio encontrado.' })
    @ApiResponse({ status: 404, description: 'Registro no encontrado.' })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.serviceRecordService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar un registro de servicio' })
    @ApiResponse({ status: 200, description: 'Registro actualizado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Registro no encontrado.' })
    update(@Param('id', ParseIntPipe) id: number, @Body() updateServiceRecordDto: UpdateServiceRecordDto) {
        return this.serviceRecordService.update(id, updateServiceRecordDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un registro de servicio' })
    @ApiResponse({ status: 200, description: 'Registro eliminado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Registro no encontrado.' })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.serviceRecordService.remove(id);
    }
}
