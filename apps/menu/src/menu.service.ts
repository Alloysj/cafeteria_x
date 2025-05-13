import { Injectable } from '@nestjs/common';

export interface Menu {
  id?: number;
  name: string;
  price: number;
  category?: string;
}

@Injectable()
export class MenuService {
  create(data: Menu) {
    // Simulate a database insert operation
    const newMenuItem = { id: Date.now(), ...data };
    return newMenuItem;
  }
  findById(id: any) {
    // Simulate a database find operation
    const menuItem = { id, name: 'Coffee', price: 25 };
    return menuItem;
  }
  update(id: any, data: Menu) {
    // Simulate a database update operation
    const updatedMenuItem = { id, ...data };
    return updatedMenuItem;
  }
  delete(id: any) {
    // Simulate a database delete operation
    return { message: `Menu item with id ${id} deleted` };
  }
  findByCategory(category: any) {
    // Simulate a database find operation by category
    const menuItems = [
      { id: 1, name: 'Coffee', price: 25, category: 'Beverage' },
      { id: 2, name: 'Tea', price: 20, category: 'Beverage' },
    ];
    return menuItems.filter(item => item.category === category);
  }
  findByName(name: any) {
    // Simulate a database find operation by name
    const menuItems = [
      { id: 1, name: 'Coffee', price: 25 },
      { id: 2, name: 'Tea', price: 20 },
    ];
    return menuItems.filter(item => item.name === name);
  }
  findByPrice(price: any) {
    // Simulate a database find operation by price
    const menuItems = [
      { id: 1, name: 'Coffee', price: 25 },
      { id: 2, name: 'Tea', price: 20 },
    ];
    return menuItems.filter(item => item.price === price);
  }
  findAll() {
    return [
      { id: 1, name: 'Coffee', price: 25 },
      { id: 2, name: 'Tea', price: 20 },
      { id: 3, name: 'Juice', price: 30 },
    ];
  }
}
