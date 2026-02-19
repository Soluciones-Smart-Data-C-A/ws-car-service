import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { VehiclesService } from './vehicles.service';

@ApiBearerAuth()
@ApiTags('Vehicles')
@UseGuards(JwtAuthGuard)
@Controller('vehicles')
export class VehiclesController {

    constructor(private readonly vehiclesService: VehiclesService) { }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo vehículo' })
    @ApiResponse({ status: 201, description: 'El vehículo ha sido creado exitosamente.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    create(@Body() createVehicleDto: CreateVehicleDto, @GetUser('id') userId: number,) {
        return this.vehiclesService.create(createVehicleDto, userId);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los vehículos' })
    @ApiResponse({ status: 200, description: 'Lista de vehículos obtenida.' })
    async findAll(@GetUser('id') userId: number) {
        return await this.vehiclesService.findAll(userId);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un vehículo por ID' })
    @ApiResponse({ status: 200, description: 'Vehículo encontrado.' })
    @ApiResponse({ status: 404, description: 'Vehículo no encontrado.' })
    async findById(@Param('id', ParseIntPipe) id: number, @GetUser('id') userId: number) {
        return await this.vehiclesService.findById(id, userId);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar un vehículo' })
    @ApiResponse({ status: 200, description: 'Vehículo actualizado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Vehículo no encontrado.' })
    update(@Param('id', ParseIntPipe) id: number,
        @Body() updateVehicleDto: UpdateVehicleDto, @GetUser('id') userId: number) {
        return this.vehiclesService.update(id, updateVehicleDto, userId);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un vehículo' })
    @ApiResponse({ status: 200, description: 'Vehículo eliminado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Vehículo no encontrado.' })
    delete(@Param('id', ParseIntPipe) id: number, @GetUser('id') userId: number) {
        return this.vehiclesService.delete(id, userId);
    }
}
