import { Injectable, NotFoundException } from '@nestjs/common';
import { ServiceRecord } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceRecordDto } from '../dto/create-service-record.dto';
import { UpdateServiceRecordDto } from '../dto/update-service-record.dto';
import { IServiceRecordRepository } from './service-record.repository';

@Injectable()
export class PrismaServiceRecordRepository implements IServiceRecordRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateServiceRecordDto): Promise<ServiceRecord> {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: { id: data.vehicleId },
    });
    if (!vehicle) {
      throw new NotFoundException(
        `El vehículo con ID ${data.vehicleId} no existe.`,
      );
    }

    const service = await this.prisma.service.findUnique({
      where: { id: data.serviceId },
    });
    if (!service) {
      throw new NotFoundException(
        `El servicio con ID ${data.serviceId} no existe.`,
      );
    }

    const recordData = {
      ...data,
      date: data.date ? new Date(data.date) : new Date(),
    };

    return this.prisma.serviceRecord.create({ data: recordData });
  }

  async findAll(): Promise<ServiceRecord[]> {
    return this.prisma.serviceRecord.findMany({
      include: { vehicle: true, service: true },
    });
  }

  async findById(id: number): Promise<ServiceRecord | null> {
    return this.prisma.serviceRecord.findUnique({
      where: { id },
      include: { vehicle: true, service: true },
    });
  }

  async update(
    id: number,
    data: UpdateServiceRecordDto,
  ): Promise<ServiceRecord> {
    const recordData = { ...data } as any;
    if (recordData.date) {
      recordData.date = new Date(recordData.date);
    }
    return this.prisma.serviceRecord.update({
      where: { id },
      data: recordData,
    });
  }

  async delete(id: number): Promise<ServiceRecord> {
    return this.prisma.serviceRecord.delete({ where: { id } });
  }
}
