import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { MessagePattern, EventPattern, Payload } from '@nestjs/microservices'; 

@Controller('payment')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}

  @Post()
  makePayment(@Body() paymentDto: { orderId: number; amount: number }) {
    return this.paymentService.processPayment(paymentDto);
  }

  @MessagePattern({ cmd: 'create_payment' })
  createPayment(data: any) {
    return this.paymentService.create(data);
  }
  @MessagePattern({ cmd: 'get_all_payments' })
  getAllPayments() {
    return this.paymentService.findAll();
  }
  @MessagePattern({ cmd: 'get_payment_by_id' })
  getPaymentById(data: any) {
    return this.paymentService.findById(data.id);
  }
  @MessagePattern({ cmd: 'update_payment' })
  updatePayment(data: any) {
    return this.paymentService.update(data.id, data);
  }
  @MessagePattern({ cmd: 'delete_payment' })
  deletePayment(data: any) {
    return this.paymentService.delete(data.id);
  }
  @MessagePattern({ cmd: 'get_payment_by_order_id' })
  getPaymentByOrderId(data: any) {
    return this.paymentService.findByOrderId(data.orderId);
  }
  @MessagePattern({ cmd: 'get_payment_by_amount' })
  getPaymentByAmount(data: any) {
    return this.paymentService.findByAmount(data.amount);
  }
  @MessagePattern({ cmd: 'get_payment_by_status' })
  getPaymentByStatus(data: any) {
    return this.paymentService.findByStatus(data.status);
  }
  @MessagePattern({ cmd: 'get_payment_by_date' })
  getPaymentByDate(data: any) {
    return this.paymentService.findByDate(data.date);
  }
  @EventPattern('order_created')
  handleOrderCreated(@Payload() data: any) {
    console.log('Received order:', data);
    // You can add payment logic here
    // For example, you can call the payment service to process the payment
    // this.paymentService.processPayment(data);
    // Or you can emit an event to another service
    // this.client.emit('payment_processed', { orderId: data.id, status: 'success' });
  }
}