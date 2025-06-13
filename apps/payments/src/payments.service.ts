import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PaymentsService {
  constructor(
    private prisma: PrismaService,
    @Inject('ORDERS_SERVICE') private readonly ordersClient: ClientProxy,
  ) {}
  async createPayment(data: {
    orderId: number;
    amount: number;
    method: string;
    transactionId?: string;
  }) {
    const payment = await this.prisma.payment.create({ data });
    // Notify orders service that the payment has been confirmed
    this.ordersClient.emit({ cmd: 'payment_confirmed' }, payment);
    return payment;
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
