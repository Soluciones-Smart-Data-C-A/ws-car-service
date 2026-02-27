import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './user.service';
import { BcryptService } from 'src/common/services/bcrypt.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, BcryptService], 
  exports: [UsersService],
})
export class UsersModule {}
