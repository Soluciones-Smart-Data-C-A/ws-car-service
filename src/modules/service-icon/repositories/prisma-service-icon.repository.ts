import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceIconDto } from '../dto/create-service-icon.dto';
import { UpdateServiceIconDto } from '../dto/update-service-icon.dto';
import { IServiceIconRepository } from './service-icon.repository';
import { ServiceIcon } from 'src/generated/prisma/client';

@Injectable()
export class PrismaServiceIconRepository implements IServiceIconRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateServiceIconDto): Promise<ServiceIcon> {
        return this.prisma.serviceIcon.create({ data });
    }

    async findAll(): Promise<ServiceIcon[]> {
        return this.prisma.serviceIcon.findMany();
    }

    async findById(id: number): Promise<ServiceIcon | null> {
        return this.prisma.serviceIcon.findUnique({ where: { id } });
    }

    async update(id: number, data: UpdateServiceIconDto): Promise<ServiceIcon> {
        return this.prisma.serviceIcon.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<ServiceIcon> {
        return this.prisma.serviceIcon.delete({ where: { id } });
    }
}
