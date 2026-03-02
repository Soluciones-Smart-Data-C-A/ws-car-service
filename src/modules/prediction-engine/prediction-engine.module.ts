import { Module } from '@nestjs/common';
import { PredictionEngineController } from './prediction-engine.controller';
import { PredictionEngineService } from './prediction-engine.service';

@Module({
  controllers: [PredictionEngineController],
  providers: [PredictionEngineService]
})
export class PredictionEngineModule {}
