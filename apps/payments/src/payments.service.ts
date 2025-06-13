import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { OrderStatus } from '../../libs/common/order-status.enum';

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
    status?: OrderStatus;
  }) {
    return this.prisma.payment.create({
      data: {
        ...data,
        status: data.status ?? OrderStatus.Queued,
      },
    });
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
