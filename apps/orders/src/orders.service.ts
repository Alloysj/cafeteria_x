import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  findAll() {
    return [{ id: 1, item: 'Coffee' }];
  }
}