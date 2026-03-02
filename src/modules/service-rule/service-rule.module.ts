import { Module } from '@nestjs/common';
import { ServiceRuleController } from './service-rule.controller';
import { ServiceRuleService } from './service-rule.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaServiceRuleRepository } from './repositories/prisma-service-rule.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ServiceRuleController],
  providers: [PrismaServiceRuleRepository, ServiceRuleService]
})
export class ServiceRuleModule { }
