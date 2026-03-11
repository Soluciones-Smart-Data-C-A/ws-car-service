import { Module } from '@nestjs/common';
import { ServiceIconController } from './service-icon.controller';
import { ServiceIconService } from './service-icon.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaServiceIconRepository } from './repositories/prisma-service-icon.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ServiceIconController],
  providers: [PrismaServiceIconRepository, ServiceIconService],
})
export class ServiceIconModule {}
