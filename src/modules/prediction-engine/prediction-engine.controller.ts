import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PredictionEngineService } from './prediction-engine.service';

@ApiTags('Prediction Engine')
@Controller('prediction-engine')
export class PredictionEngineController {
  constructor(
    private readonly predictionEngineService: PredictionEngineService,
  ) {}

  @Get('vehicle/:vehicleId/health')
  @ApiOperation({
    summary:
      'Calcular la salud y predicción de servicios de un vehículo particular',
  })
  @ApiResponse({
    status: 200,
    description: 'Reporte de salud y predicciones generadas exitosamente.',
  })
  @ApiResponse({ status: 404, description: 'Vehículo no encontrado.' })
  calculateHealth(@Param('vehicleId', ParseIntPipe) vehicleId: number) {
    return this.predictionEngineService.calculateVehicleHealth(vehicleId);
  }
}
