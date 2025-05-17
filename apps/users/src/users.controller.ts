import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'create_user' })
  createUser(data: any) {
    console.log(data, 'Received user...');
    return this.usersService.createUser(data);
  }
  @MessagePattern({ cmd: 'get_users' })
  getAllUsers() {
    return this.usersService.findAll();
  } 
  @MessagePattern({ cmd: 'get_user_by_id' })
  getUserById(data: any) {
    return this.usersService.findById(data.id);
  }
  @MessagePattern({ cmd: 'update_user' })
  updateUser(data: any) {
    return this.usersService.update(data.id, data);
  } 
  @MessagePattern({ cmd: 'delete_user' })
  deleteUser(data: any) {
    return this.usersService.delete(data.id);
  } 
}
