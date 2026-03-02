import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaServiceRepository } from './repositories/prisma-service.repository';

@Injectable()
export class ServiceService {
    constructor(private readonly serviceRepository: PrismaServiceRepository) { }

    async create(createServiceDto: CreateServiceDto) {
        return this.serviceRepository.create(createServiceDto);
    }

    async findAll() {
        return this.serviceRepository.findAll();
    }

    async findOne(id: number) {
        const service = await this.serviceRepository.findById(id);
        if (!service) throw new NotFoundException(`Service with ID ${id} not found`);
        return service;
    }

    async update(id: number, updateServiceDto: UpdateServiceDto) {
        await this.findOne(id);
        return this.serviceRepository.update(id, updateServiceDto);
    }

    async remove(id: number) {
        await this.findOne(id);
        return this.serviceRepository.delete(id);
    }
}
