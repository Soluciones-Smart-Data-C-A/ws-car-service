import { GetServiceIconDto } from './dto/get-serviceicon.dto';
import { UpdateServiceIconDto } from './dto/update-serviceicon.dto';
import { ServiceIconsService } from './serviceicons.service';
import { Body, Controller, Get, Param } from '@nestjs/common';

@Controller('serviceicons')
export class ServiceIconsController {
  constructor(private readonly serviceIconsService: ServiceIconsService) {}

  // Usando el GetServiceIconDto para validar el ID en la URL
  @Get(':id')
  findOne(@Param() params: GetServiceIconDto) {
    return this.serviceIconsService.findOne(params.id);
  }

  update(
    @Param('id') id: string, 
    @Body() updateServiceIconDto: UpdateServiceIconDto
  ) {
    return this.serviceIconsService.update(+id, updateServiceIconDto);
  }
}
