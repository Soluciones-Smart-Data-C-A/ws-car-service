import { Module } from '@nestjs/common';
import { ServiceIconsController } from './serviceicons.controller';
import { ServiceIconsService } from './serviceicons.service';
import { ServiceIconsRepository } from './repositories/service-icons.repository';

@Module({
  controllers: [ServiceIconsController],
  providers: [ServiceIconsService, ServiceIconsRepository]
})
export class ServiceIconsModule {}
