import { Controller, Post, Body, Inject, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiGatewayService } from './api-gateway.service';
import { firstValueFrom } from 'rxjs';

@Controller()
export class ApiGatewayController {
  constructor(
    @Inject('ORDERS_SERVICE') private readonly ordersClient: ClientProxy,
    @Inject('MENU_SERVICE') private readonly menuClient: ClientProxy,
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy
  ) {}

  @Post('order')
  createOrder(@Body() data: any) {
    return this.ordersClient.send('create_order', data);
  }

  @Post('menu')
  addMenuItem(@Body() data: any) {
    return this.menuClient.send('add_menu_item', data);
  }

  @Post('payment')
  processPayment(@Body() data: any) {
    return this.paymentClient.send('process_payment', data);
  }
  @Get('test-order')
  async testOrder() {
    const response = await firstValueFrom(
      this.ordersClient.send({ cmd: 'get_orders' }, {}),
    );
    return response;
  }
  @Get('test-menu')
  async testMenu() {
    const response = await firstValueFrom(
      this.menuClient.send('get_menu', {}),
    );
    return response;
  }
  @Get('test-payment')
  async testPayment() { 
    const response = await firstValueFrom(
      this.paymentClient.send('get_payment', {}),
    );
    return response;
  }
}

