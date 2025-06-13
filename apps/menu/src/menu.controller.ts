import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, MessagePattern } from '@nestjs/microservices';
import { KitchenService } from './menu.service';
import { OrderStatus } from '../../libs/common/order-status.enum';

@Controller()
export class KitchenController {
  constructor(
    private readonly kitchenService: KitchenService,
    @Inject('ORDERS_SERVICE') private readonly ordersClient: ClientProxy,
  ) {}

  @EventPattern({ cmd: 'order_created' })
  handleNewOrder(data: { orderId: number; item: string }) {
    return this.kitchenService.queueOrder(data);
  }

  @MessagePattern({ cmd: 'start_preparing' })
  startPreparing(data: { orderId: number }) {
    console.log(`Starting preparation for order #${data.orderId}`);
    return this.kitchenService.updateStatus(data.orderId, OrderStatus.InProgress);
  }

  @MessagePattern({ cmd: 'mark_ready' })
  async markReady(data: { orderId: number }) {
    console.log(`Marking order #${data.orderId} as ready`);
<<<<<<< codex/create-shared-order-status-enum
    return this.kitchenService.updateStatus(data.orderId, OrderStatus.Ready);
=======
    const result = await this.kitchenService.updateStatus(
      data.orderId,
      'ready',
    );
    this.ordersClient.emit(
      { cmd: 'update_order' },
      { id: data.orderId, status: 'ready' },
    );
    return result;
>>>>>>> main
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
