import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payment')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}

  @Post()
  makePayment(@Body() paymentDto: { orderId: number; amount: number }) {
    return this.paymentService.processPayment(paymentDto);
  }
}