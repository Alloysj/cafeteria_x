import { Module } from '@nestjs/common';
import { KitchenController } from './menu.controller';
import { KitchenService } from './menu.service';

@Module({
  imports: [],
  controllers: [KitchenController],
  providers: [KitchenService],
})
export class AppModule {}
