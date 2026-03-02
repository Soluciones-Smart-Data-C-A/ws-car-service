import { ServiceRecord } from 'src/generated/prisma/client';
import { CreateServiceRecordDto } from '../dto/create-service-record.dto';
import { UpdateServiceRecordDto } from '../dto/update-service-record.dto';

export interface IServiceRecordRepository {
    create(data: CreateServiceRecordDto): Promise<ServiceRecord>;
    findAll(): Promise<ServiceRecord[]>;
    findById(id: number): Promise<ServiceRecord | null>;
    update(id: number, data: UpdateServiceRecordDto): Promise<ServiceRecord>;
    delete(id: number): Promise<ServiceRecord>;
}
