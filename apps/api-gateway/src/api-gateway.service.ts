import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ApiGatewayService {
  constructor(
    @Inject('ORDERS_SERVICE') private readonly ordersClient: ClientProxy,
    @Inject('MENU_SERVICE') private readonly menuClient: ClientProxy,
    @Inject('PAYMENT_SERVICE') private readonly paymentsClient: ClientProxy,
    @Inject('USERS_SERVICE') private readonly usersClient: ClientProxy,
  ) {}

  createOrder(orderDto: any) {
    return this.ordersClient.send({ cmd: 'create_order' }, orderDto);
  }

  getMenuItems() {
    return this.menuClient.send({ cmd: 'get_all_menu_items' }, {});
  }

  processPayment(paymentDto: any) {
    return this.paymentsClient.send({ cmd: 'process_payment' }, paymentDto);
  }

  createUser(userDto: any) {
    console.log(userDto, 'userDto');
    return this.usersClient.send({ cmd: 'create_user' }, userDto);
  }
}