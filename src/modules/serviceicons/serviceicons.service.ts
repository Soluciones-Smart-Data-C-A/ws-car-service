import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ServiceIconsRepository } from './repositories/service-icons.repository';
import { CreateServiceIconDto } from './dto/create-serviceicon.dto';
import { UpdateServiceIconDto } from './dto/update-serviceicon.dto';

@Injectable()
export class ServiceIconsService {
  constructor(private repository: ServiceIconsRepository) {}

  async create(data: CreateServiceIconDto) {
    // Regla de negocio: No repetir nombres de iconos
    const exists = await this.repository.findByName(data.name);
    if (exists) {
      throw new ConflictException(`El icono con nombre "${data.name}" ya existe`);
    }
    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const icon = await this.repository.findById(id);
    if (!icon) {
      throw new NotFoundException(`Icono con ID ${id} no encontrado`);
    }
    return icon;
  }

  async update(id: number, data: UpdateServiceIconDto) {
    await this.findOne(id); // Reutilizamos findOne para validar existencia
    return this.repository.update(id, data);
  }

  async remove(id: number) {
    await this.findOne(id); // Validamos que exista antes de borrar
    return this.repository.delete(id);
  }
}