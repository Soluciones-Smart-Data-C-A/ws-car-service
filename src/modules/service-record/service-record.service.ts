import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceRecordDto } from './dto/create-service-record.dto';
import { UpdateServiceRecordDto } from './dto/update-service-record.dto';
import { PrismaServiceRecordRepository } from './repositories/prisma-service-record.repository';

@Injectable()
export class ServiceRecordService {
    constructor(private readonly serviceRecordRepository: PrismaServiceRecordRepository) { }

    async create(createServiceRecordDto: CreateServiceRecordDto) {
        return this.serviceRecordRepository.create(createServiceRecordDto);
    }

    async findAll() {
        return this.serviceRecordRepository.findAll();
    }

    async findOne(id: number) {
        const record = await this.serviceRecordRepository.findById(id);
        if (!record) throw new NotFoundException(`ServiceRecord with ID ${id} not found`);
        return record;
    }

    async update(id: number, updateServiceRecordDto: UpdateServiceRecordDto) {
        await this.findOne(id);
        return this.serviceRecordRepository.update(id, updateServiceRecordDto);
    }

    async remove(id: number) {
        await this.findOne(id);
        return this.serviceRecordRepository.delete(id);
    }
}
