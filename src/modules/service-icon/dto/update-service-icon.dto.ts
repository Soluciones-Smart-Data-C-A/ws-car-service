import { PartialType } from '@nestjs/swagger';
import { CreateServiceIconDto } from './create-service-icon.dto';

export class UpdateServiceIconDto extends PartialType(CreateServiceIconDto) { }
