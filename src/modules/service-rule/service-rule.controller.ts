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
import { ServiceRuleService } from './service-rule.service';
import { CreateServiceRuleDto } from './dto/create-service-rule.dto';
import { UpdateServiceRuleDto } from './dto/update-service-rule.dto';

@ApiTags('Service Rules')
@Controller('service-rules')
export class ServiceRuleController {
  constructor(private readonly serviceRuleService: ServiceRuleService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva regla de servicio' })
  @ApiResponse({
    status: 201,
    description: 'Regla de servicio creada exitosamente.',
  })
  create(@Body() createServiceRuleDto: CreateServiceRuleDto) {
    return this.serviceRuleService.create(createServiceRuleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las reglas de servicio' })
  @ApiResponse({ status: 200, description: 'Lista de reglas de servicio.' })
  findAll() {
    return this.serviceRuleService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una regla de servicio por su ID' })
  @ApiResponse({ status: 200, description: 'Regla de servicio encontrada.' })
  @ApiResponse({ status: 404, description: 'Regla de servicio no encontrada.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.serviceRuleService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una regla de servicio' })
  @ApiResponse({
    status: 200,
    description: 'Regla de servicio actualizada exitosamente.',
  })
  @ApiResponse({ status: 404, description: 'Regla de servicio no encontrada.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateServiceRuleDto: UpdateServiceRuleDto,
  ) {
    return this.serviceRuleService.update(id, updateServiceRuleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una regla de servicio' })
  @ApiResponse({
    status: 200,
    description: 'Regla de servicio eliminada exitosamente.',
  })
  @ApiResponse({ status: 404, description: 'Regla de servicio no encontrada.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.serviceRuleService.remove(id);
  }
}
