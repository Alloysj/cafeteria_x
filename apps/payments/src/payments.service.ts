import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  processPayment(payment: { orderId: number; amount: number }) {
    return {
      status: 'success',
      message: `Payment of ${payment.amount} for order ${payment.orderId} processed.`,
    };
  }
}
