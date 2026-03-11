import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceIconDto } from './dto/create-service-icon.dto';
import { UpdateServiceIconDto } from './dto/update-service-icon.dto';
import { PrismaServiceIconRepository } from './repositories/prisma-service-icon.repository';

@Injectable()
export class ServiceIconService {
  constructor(
    private readonly serviceIconRepository: PrismaServiceIconRepository,
  ) {}

  async create(createServiceIconDto: CreateServiceIconDto) {
    return this.serviceIconRepository.create(createServiceIconDto);
  }

  async findAll() {
    return this.serviceIconRepository.findAll();
  }

  async findOne(id: number) {
    const icon = await this.serviceIconRepository.findById(id);
    if (!icon)
      throw new NotFoundException(`ServiceIcon with ID ${id} not found`);
    return icon;
  }

  async update(id: number, updateServiceIconDto: UpdateServiceIconDto) {
    await this.findOne(id);
    return this.serviceIconRepository.update(id, updateServiceIconDto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.serviceIconRepository.delete(id);
  }
}
