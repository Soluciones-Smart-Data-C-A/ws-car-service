import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ServiceIconService } from './service-icon.service';
import { CreateServiceIconDto } from './dto/create-service-icon.dto';
import { UpdateServiceIconDto } from './dto/update-service-icon.dto';

@ApiTags('Service Icons')
@Controller('service-icons')
export class ServiceIconController {
  constructor(private readonly serviceIconService: ServiceIconService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo ícono de servicio' })
  @ApiResponse({ status: 201, description: 'Ícono creado exitosamente.' })
  create(@Body() createServiceIconDto: CreateServiceIconDto) {
    return this.serviceIconService.create(createServiceIconDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los íconos de servicio' })
  @ApiResponse({ status: 200, description: 'Lista de íconos.' })
  findAll() {
    return this.serviceIconService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un ícono por su ID' })
  @ApiResponse({ status: 200, description: 'Ícono encontrado.' })
  @ApiResponse({ status: 404, description: 'Ícono no encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.serviceIconService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un ícono de servicio' })
  @ApiResponse({ status: 200, description: 'Ícono actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Ícono no encontrado.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateServiceIconDto: UpdateServiceIconDto,
  ) {
    return this.serviceIconService.update(id, updateServiceIconDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un ícono de servicio' })
  @ApiResponse({ status: 200, description: 'Ícono eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Ícono no encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.serviceIconService.remove(id);
  }
}
