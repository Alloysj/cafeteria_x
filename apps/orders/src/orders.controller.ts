import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern({ cmd: 'create_order' })
  createOrder(data: any) {
    console.log(data, 'Received order...');
    return this.ordersService.create(data);
  }
  @MessagePattern({ cmd: 'get_orders' })
  getAllOrders() {
    return this.ordersService.findAll();
  }
  @MessagePattern({ cmd: 'get_order_by_id' })
  getOrderById(data: any) {
    return this.ordersService.findById(data.id);
  } 
  @MessagePattern({ cmd: 'update_order' })
  updateOrder(data: any) {
    return this.ordersService.update(data.id, data);
  }
  @MessagePattern({ cmd: 'delete_order' })
  deleteOrder(data: any) {
    return this.ordersService.delete(data.id);
  }
  @MessagePattern({ cmd: 'get_order_by_customer_id' })
  getOrderByCustomerId(data: any) {
    return this.ordersService.findByCustomerId(data.customerId);
  }
  @MessagePattern({ cmd: 'get_order_by_status' })
  getOrderByStatus(data: any) {
    return this.ordersService.findByStatus(data.status);
  }
  @MessagePattern({ cmd: 'get_order_by_date' })
  getOrderByDate(data: any) {
    return this.ordersService.findByDate(data.date);
  }
  @MessagePattern({ cmd: 'get_order_by_total_amount' })
  getOrderByTotalAmount(data: any) {  
    return this.ordersService.findByTotalAmount(data.amount);
  }
  @MessagePattern({ cmd: 'get_order_by_payment_method' })
  getOrderByPaymentMethod(data: any) {  
    return this.ordersService.findByPaymentMethod(data.method);
  }
}
