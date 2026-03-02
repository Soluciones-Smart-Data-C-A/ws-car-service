import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceRuleDto } from '../dto/create-service-rule.dto';
import { UpdateServiceRuleDto } from '../dto/update-service-rule.dto';
import { IServiceRuleRepository } from './service-rule.repository';
import { ServiceRule } from 'src/generated/prisma/client';

@Injectable()
export class PrismaServiceRuleRepository implements IServiceRuleRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateServiceRuleDto): Promise<ServiceRule> {
        return this.prisma.serviceRule.create({ data });
    }

    async findAll(): Promise<ServiceRule[]> {
        return this.prisma.serviceRule.findMany({ include: { icon: true } });
    }

    async findById(id: number): Promise<ServiceRule | null> {
        return this.prisma.serviceRule.findUnique({
            where: { id },
            include: { icon: true }
        });
    }

    async update(id: number, data: UpdateServiceRuleDto): Promise<ServiceRule> {
        return this.prisma.serviceRule.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<ServiceRule> {
        return this.prisma.serviceRule.delete({ where: { id } });
    }
}
