import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Post()
    add(@Body() dto) {
        
        // if (!dto.email || !dto.phone || !dto.password) {
        //   throw new BadRequestException('Faltan campos obligatorios: email, phone o password');
        // }
        return this.usersService.create(dto);
    }
}
