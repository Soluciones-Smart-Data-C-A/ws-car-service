import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaServiceRepository } from './repositories/prisma-service.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ServiceController],
  providers: [PrismaServiceRepository, ServiceService]
})
export class ServiceModule { }
