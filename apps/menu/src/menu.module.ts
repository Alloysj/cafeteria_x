import { Module } from '@nestjs/common';
import { KitchenController } from './menu.controller';
import { KitchenService } from './menu.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [KitchenController],
  providers: [KitchenService, PrismaService],
})
export class MenuModule {}
