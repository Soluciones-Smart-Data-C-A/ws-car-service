import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceRuleDto } from './dto/create-service-rule.dto';
import { UpdateServiceRuleDto } from './dto/update-service-rule.dto';
import { PrismaServiceRuleRepository } from './repositories/prisma-service-rule.repository';

@Injectable()
export class ServiceRuleService {
  constructor(
    private readonly serviceRuleRepository: PrismaServiceRuleRepository,
  ) {}

  async create(createServiceRuleDto: CreateServiceRuleDto) {
    return this.serviceRuleRepository.create(createServiceRuleDto);
  }

  async findAll() {
    return this.serviceRuleRepository.findAll();
  }

  async findOne(id: number) {
    const rule = await this.serviceRuleRepository.findById(id);
    if (!rule)
      throw new NotFoundException(`ServiceRule with ID ${id} not found`);
    return rule;
  }

  async update(id: number, updateServiceRuleDto: UpdateServiceRuleDto) {
    await this.findOne(id);
    return this.serviceRuleRepository.update(id, updateServiceRuleDto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.serviceRuleRepository.delete(id);
  }
}
