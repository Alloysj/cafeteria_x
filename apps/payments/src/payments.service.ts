import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}
  async createPayment(data: {
    orderId: number;
    amount: number;
    method: string;
    transactionId?: string;
  }) {
    return this.prisma.payment.create({ data });
  }

  async getPayment(orderId: number) {
    return this.prisma.payment.findFirst({ where: { orderId } });
  }

  async createInvoice(data: {
    paymentId: number;
    number: string;
    details?: string;
  }) {
    return this.prisma.invoice.create({
      data: {
        ...data,
        issuedAt: new Date(),
      },
    });
  }
}
