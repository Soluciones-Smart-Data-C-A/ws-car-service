import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServiceIconModule } from './modules/service-icon/service-icon.module';
import { ServiceModule } from './modules/service/service.module';
import { ServiceRuleModule } from './modules/service-rule/service-rule.module';
import { ServiceRecordModule } from './modules/service-record/service-record.module';
import { PredictionEngineModule } from './modules/prediction-engine/prediction-engine.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    VehiclesModule,
    PrismaModule,
    ServiceIconModule,
    ServiceModule,
    ServiceRuleModule,
    ServiceRecordModule,
    PredictionEngineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // Aplica a todas las rutas
  }
}
