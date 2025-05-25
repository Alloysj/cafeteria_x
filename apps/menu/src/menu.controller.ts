import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { KitchenService } from './menu.service';

@Controller()
export class KitchenController {
  constructor(private readonly kitchenService: KitchenService) {}

  @MessagePattern({ cmd: 'order_created' })
  handleNewOrder(data: { orderId: number; item: string }) {
    return this.kitchenService.queueOrder(data);
  }

  @MessagePattern({ cmd: 'start_preparing' })
  startPreparing(data: { orderId: number }) {
    return this.kitchenService.updateStatus(data.orderId, 'preparing');
  }

  @MessagePattern({ cmd: 'mark_ready' })
  markReady(data: { orderId: number }) {
    return this.kitchenService.updateStatus(data.orderId, 'ready');
  }

  @MessagePattern({ cmd: 'update_menu_item' })
  updateMenuItem(data: {
    name: string;
    description?: string;
    price: number;
    available?: boolean;
  }) {
    return this.kitchenService.createOrUpdateMenuItem(data);
  }
}
