import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PaymentsService } from './payments.service';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}

  @MessagePattern({ cmd: 'process_payment' })
  processPayment(data: {
    orderId: number;
    amount: number;
    method: string;
    transactionId?: string;
  }) {
    return this.paymentService.createPayment(data);
  }

  @MessagePattern({ cmd: 'get_payment' })
  getPayment(data: { orderId: number }) {
    console.log('Fetching payment for orderId:', data.orderId);
    if (!data.orderId) { 
      throw new Error('Order ID is required to fetch payment details');
    }
    return this.paymentService.getPayment(data.orderId);
  }

  @MessagePattern({ cmd: 'create_invoice' })
  createInvoice(data: {
    paymentId: number;
    number: string;
    details?: string;
  }) {
    return this.paymentService.createInvoice(data);
  }
}
