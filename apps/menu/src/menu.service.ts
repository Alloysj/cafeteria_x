import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  findAll() {
    return [
      { id: 1, name: 'Coffee', price: 25 },
      { id: 2, name: 'Tea', price: 20 },
      { id: 3, name: 'Juice', price: 30 },
    ];
  }
}
