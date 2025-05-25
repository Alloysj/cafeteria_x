import {
  Controller,
  Post,
  Body,
  Inject,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class ApiGatewayController {
  constructor(
    @Inject('ORDERS_SERVICE') private readonly ordersClient: ClientProxy,
    @Inject('MENU_SERVICE') private readonly menuClient: ClientProxy,
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
    @Inject('USERS_SERVICE') private readonly usersClient: ClientProxy,
  ) {}

  @Post('api/orders/create')
  createOrder(@Body() data: any) {
    console.log(data, 'Received order...');
    return this.ordersClient.send({ cmd: 'create_order' }, data);
  }

  // Kitchen management endpoints
  @Get('api/kitchen/menu')
  getMenu() {
    return this.menuClient.send({ cmd: 'get_menu' }, {});
  }

  @Post('api/kitchen/menu')
  addOrUpdateMenuItem(@Body() data: any) {
    return this.menuClient.send({ cmd: 'update_menu_item' }, data);
  }

  @Post('menu')
  addMenuItem(@Body() data: any) {
    return this.menuClient.send({ cmd: 'add_menu_item' }, data);
  }

  // Payment management endpoints

  @Post('api/payments')
  processPayment(
    @Body()
    data: {
      orderId: number;
      amount: number;
      method: string;
      transactionId?: string;
    },
  ) {
    return this.paymentClient.send({ cmd: 'process_payment' }, data);
  }

  @Get('api/payments/:orderId')
  getPayment(@Param('orderId') orderId: string) {
    return this.paymentClient.send(
      { cmd: 'get_payment' },
      { orderId: Number(orderId) },
    );
  }

  // POST /api/invoices → create invoice for a payment
  @Post('api/invoices')
  createInvoice(
    @Body() data: { paymentId: number; number: string; details?: string },
  ) {
    return this.paymentClient.send({ cmd: 'create_invoice' }, data);
  }

  // User management endpoints

  @Post('api/register')
  registerUser(@Body() data: any) {
    console.log(data, 'Sending user...');
    return this.usersClient.send({ cmd: 'create_user' }, data);
  }
  @Post('api/login')
  loginUser(@Body() data: any) {
    console.log(data, 'Sending login...');
    return this.usersClient.send({ cmd: 'login_user' }, data);
  }

  @Put('api/users/:id')
  updateUser(@Param('id') id: string, @Body() data: any) {
    return this.usersClient.send({ cmd: 'update_user' }, { id, data });
  }

  @Delete('api/users/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersClient.send({ cmd: 'delete_user' }, { id });
  }

  @Get('api/users/:id')
  getUserById(@Param('id') id: string) {
    return this.usersClient.send({ cmd: 'get_user' }, { id });
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
      this.menuClient.send({ cmd: 'get_menu' }, {}),
    );
    return response;
  }

  @Get('test-payment')
  async testPayment() {
    const response = await firstValueFrom(
      this.paymentClient.send({ cmd: 'get_payment' }, {}),
    );
    return response;
  }
}
