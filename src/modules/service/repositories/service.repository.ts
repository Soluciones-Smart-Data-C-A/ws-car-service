import { Service } from 'src/generated/prisma/client';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';

export interface IServiceRepository {
    create(data: CreateServiceDto): Promise<Service>;
    findAll(): Promise<Service[]>;
    findById(id: number): Promise<Service | null>;
    update(id: number, data: UpdateServiceDto): Promise<Service>;
    delete(id: number): Promise<Service>;
}
