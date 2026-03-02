import { ServiceIcon } from 'src/generated/prisma/client';
import { CreateServiceIconDto } from '../dto/create-service-icon.dto';
import { UpdateServiceIconDto } from '../dto/update-service-icon.dto';

export interface IServiceIconRepository {
    create(data: CreateServiceIconDto): Promise<ServiceIcon>;
    findAll(): Promise<ServiceIcon[]>;
    findById(id: number): Promise<ServiceIcon | null>;
    update(id: number, data: UpdateServiceIconDto): Promise<ServiceIcon>;
    delete(id: number): Promise<ServiceIcon>;
}
