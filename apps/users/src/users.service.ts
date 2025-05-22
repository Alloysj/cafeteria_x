import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import * as bcrypt from 'bcrypt';
import { RpcException } from '@nestjs/microservices';



@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async createUser(data: { name: string; email: string; password?: string }) {
    // Hash the password if provided
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }
    return this.prisma.user.create({
      data,
    });
  }

async loginUser(data: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (!user) {
      throw new RpcException('Invalid credentials');
    }
    const valid = user.password ? await bcrypt.compare(data.password, user.password) : false;
    if (!valid) {
      throw new RpcException('Invalid credentials');
    }
    // Return user without password or generate JWT token here if you want
    const { password, ...result } = user;
    return result;
  }

  async updateUser(id: string, data: any) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    try {
      return await this.prisma.user.update({
        where: { id },
        data,
      });
    } catch {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  async deleteUser(id: string) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return { message: `User with id ${id} deleted` };
    } catch {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  async getUserById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const { password, ...result } = user;
    return result;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
}