import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'payments_queue', // Name of the queue the other service is listening to
      },
    });
  }

  async createOrder(orderData: any) {
    console.log('Sending order...');
    return this.client.emit('order_created', orderData);
  }
  create(data: any) {
    return { id: Date.now(), ...data };
  }
  findAll() {
    return [{ id: 1, item: 'Coffee' }];
  }
  findById(id: any) {
    return { id, item: 'Coffee' };
  }
  update(id: any, data: any) {
    return { id, ...data };
  }

  delete(id: any) {
    return { message: `Order with id ${id} deleted` };
  }
  findByCustomerId(customerId: any) {
    return [{ id: 1, item: 'Coffee', customerId }];
  }
  findByStatus(status: any) {
    return [{ id: 1, item: 'Coffee', status }];
  }
  findByDate(date: any) {
    return [{ id: 1, item: 'Coffee', date }];
  }
  findByTotalAmount(amount: any) {
    return [{ id: 1, item: 'Coffee', amount }];
  }
  findByPaymentMethod(method: any) {
    return [{ id: 1, item: 'Coffee', method }];
  }
}