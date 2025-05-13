import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  processPayment(payment: { orderId: number; amount: number }) {
    return {
      status: 'success',
      message: `Payment of ${payment.amount} for order ${payment.orderId} processed.`,
    };
  }
  create(data: any) {
    return { id: Date.now(), ...data };
  }
  findAll() {
    return [{ id: 1, orderId: 1, amount: 100 }];
  }
  findById(id: any) {
    return { id, orderId: 1, amount: 100 };
  }
  update(id: any, data: any) {
    return { id, ...data };
  }
  delete(id: any) {
    return { message: `Payment with id ${id} deleted` };
  }
  findByOrderId(orderId: any) {
    return [{ id: 1, orderId, amount: 100 }];
  }
  findByAmount(amount: any) {
    return [{ id: 1, orderId: 1, amount }];
  }
  findByStatus(status: any) {
    return [{ id: 1, orderId: 1, amount: 100, status }];
  }
  findByDate(date: any) {
    return [{ id: 1, orderId: 1, amount: 100, date }];
  }
}
