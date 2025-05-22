import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
// import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async createUser(data: { name: string; email: string; password?: string }) {
    return this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }
  async delete(id: string): Promise<{ message: string }> {
    await this.prisma.user.delete({
      where: { id },
    });
    return { message: `User with id ${id} deleted` };
  }
}