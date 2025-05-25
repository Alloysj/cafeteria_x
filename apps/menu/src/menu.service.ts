import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class KitchenService {
  constructor(private readonly prisma: PrismaService) {}

  async queueOrder(order: { orderId: number; item: string }) {
    return this.prisma.kitchenOrder.create({
      data: {
        orderId: order.orderId,
        item: order.item,
        status: 'queued',
      },
    });
  }

  async updateStatus(orderId: number, status: 'preparing' | 'ready') {
    return this.prisma.kitchenOrder.updateMany({
      where: { orderId },
      data: { status, preparedAt: status === 'ready' ? new Date() : undefined },
    });
  }

  async findAll() {
    return this.prisma.kitchenOrder.findMany();
  }

  async findByStatus(status: string) {
    return this.prisma.kitchenOrder.findMany({ where: { status } });
  }

  async createOrUpdateMenuItem(data: {
    name: string;
    description?: string;
    price: number;
    available?: boolean;
  }) {
    return this.prisma.menuItem.upsert({
      where: { name: data.name },
      update: {
        description: data.description,
        price: data.price,
        available: data.available ?? true,
      },
      create: {
        name: data.name,
        description: data.description,
        price: data.price,
        available: data.available ?? true,
      },
    });
  }
}
