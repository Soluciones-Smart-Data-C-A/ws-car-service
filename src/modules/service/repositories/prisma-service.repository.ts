import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { IServiceRepository } from './service.repository';
import { Service } from 'src/generated/prisma/client';

@Injectable()
export class PrismaServiceRepository implements IServiceRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateServiceDto): Promise<Service> {
        return this.prisma.service.create({ data });
    }

    async findAll(): Promise<Service[]> {
        return this.prisma.service.findMany({ include: { icon: true } });
    }

    async findById(id: number): Promise<Service | null> {
        return this.prisma.service.findUnique({
            where: { id },
            include: { icon: true }
        });
    }

    async update(id: number, data: UpdateServiceDto): Promise<Service> {
        return this.prisma.service.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<Service> {
        return this.prisma.service.delete({ where: { id } });
    }
}
