import { ServiceRule } from 'src/generated/prisma/client';
import { CreateServiceRuleDto } from '../dto/create-service-rule.dto';
import { UpdateServiceRuleDto } from '../dto/update-service-rule.dto';

export interface IServiceRuleRepository {
  create(data: CreateServiceRuleDto): Promise<ServiceRule>;
  findAll(): Promise<ServiceRule[]>;
  findById(id: number): Promise<ServiceRule | null>;
  update(id: number, data: UpdateServiceRuleDto): Promise<ServiceRule>;
  delete(id: number): Promise<ServiceRule>;
}
