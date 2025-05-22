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
  @MessagePattern({ cmd: 'login_user' })
  loginUser(data: { email: string; password: string }) {
    console.log(data, 'Received login...');
    return this.usersService.loginUser(data);
  }
  @MessagePattern({ cmd: 'get_users' })
  getAllUsers() {
    return this.usersService.findAll();
  } 

  @MessagePattern({ cmd: 'update_user' })
  updateUser(payload: { id: string; data: any }) {
    return this.usersService.updateUser(payload.id, payload.data);
  }

  @MessagePattern({ cmd: 'delete_user' })
  deleteUser(payload: { id: string }) {
    return this.usersService.deleteUser(payload.id);
  }

  @MessagePattern({ cmd: 'get_user' })
  getUserById(payload: { id: string }) {
    return this.usersService.getUserById(payload.id);
  }
}
