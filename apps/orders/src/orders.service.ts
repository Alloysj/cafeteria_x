import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  createOrder(data: any) {
    return this.prisma.order.create({ data });
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findById(id: number) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.order.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prisma.order.delete({ where: { id } });
  }

  findByCustomerId(customerId: number) {
    return this.prisma.order.findMany({ where: { customerId } });
  }

  findByStatus(status: string) {
    return this.prisma.order.findMany({ where: { status } });
  }

  findByDate(date: Date) {
    return this.prisma.order.findMany({ where: { createdAt: date } });
  }

  findByTotalAmount(amount: number) {
    return this.prisma.order.findMany({ where: { totalAmount: amount } });
  }

  findByPaymentMethod(method: string) {
    return this.prisma.order.findMany({ where: { paymentMethod: method } });
  }
}
