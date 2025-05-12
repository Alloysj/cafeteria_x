import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  @Get()
  getAllOrders() {
    return [{ id: 1, item: 'Coffee' }];
  }
}