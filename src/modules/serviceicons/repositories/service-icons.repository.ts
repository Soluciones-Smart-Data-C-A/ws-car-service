import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Ajusta la ruta a tu PrismaService
import { ServiceIcon } from '../../../generated/prisma'; // Asegúrate de que esta ruta sea correcta según tu configuración de Prisma
import { CreateServiceIconDto } from '../dto/create-serviceicon.dto';
import { UpdateServiceIconDto } from '../dto/update-serviceicon.dto';

@Injectable()
export class ServiceIconsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateServiceIconDto): Promise<ServiceIcon> {
    return this.prisma.serviceIcon.create({ data });
  }

  async findAll(): Promise<ServiceIcon[]> {
    return this.prisma.serviceIcon.findMany();
  }

  async findById(id: number): Promise<ServiceIcon | null> {
    return this.prisma.serviceIcon.findUnique({ where: { id } });
  }

  async findByName(name: string): Promise<ServiceIcon | null> {
    return this.prisma.serviceIcon.findFirst({ where: { name } });
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