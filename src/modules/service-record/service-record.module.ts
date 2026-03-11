import { Module } from '@nestjs/common';
import { ServiceRecordController } from './service-record.controller';
import { ServiceRecordService } from './service-record.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaServiceRecordRepository } from './repositories/prisma-service-record.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ServiceRecordController],
  providers: [PrismaServiceRecordRepository, ServiceRecordService],
})
export class ServiceRecordModule {}
