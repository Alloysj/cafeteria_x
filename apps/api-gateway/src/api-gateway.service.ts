import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class ApiGatewayService implements OnModuleInit {
  private ordersClient: ClientProxy;
  private menuClient: ClientProxy;
  private paymentsClient: ClientProxy;
  private usersClient: ClientProxy;

  onModuleInit() {
    this.ordersClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'orders_queue',
        queueOptions: { durable: false },
      },
    });

    this.menuClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'menu_queue',
        queueOptions: { durable: false },
      },
    });

    this.paymentsClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'payments_queue',
        queueOptions: { durable: false },
      },
    });

    this.usersClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'users_queue',
        queueOptions: { durable: false },
      },
    });
  }

  // Example: Forward request to orders service
  createOrder(orderDto: any) {
    return this.ordersClient.send('create_order', orderDto);
  }

  // Example: Get all menu items from menu service
  getMenuItems() {
    return this.menuClient.send('get_all_menu_items', {});
  }

  // Example: Process a payment
  processPayment(paymentDto: any) {
    return this.paymentsClient.send('process_payment', paymentDto);
  }
  // Example: Create a user
  createUser(userDto: any) {
    console.log(userDto, 'userDto');
    // Log the user data
    // Send the user data to the users service
    return this.usersClient.send('create_user', userDto);
  }
}