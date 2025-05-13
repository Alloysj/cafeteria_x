import { Controller, Get } from '@nestjs/common';
import { Menu, MenuService } from './menu.service';
import { MessagePattern } from '@nestjs/microservices'; 

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @MessagePattern({ cmd: 'get_menu' })
  getMenu(data: any) {
    return this.menuService.findAll();
  }
  @MessagePattern({ cmd: 'create_menu' })
  createMenu(data: Menu) {
    return this.menuService.create(data);
  }
  @MessagePattern({ cmd: 'get_menu_by_id' })
  getMenuById(data: any) {
    return this.menuService.findById(data.id);
  } 
  @MessagePattern({ cmd: 'update_menu' })
  updateMenu(data: Menu) {
    return this.menuService.update(data.id, data);
  }
  @MessagePattern({ cmd: 'delete_menu' })
  deleteMenu(data: any) {
    return this.menuService.delete(data.id);
  }
  @MessagePattern({ cmd: 'get_menu_by_category' })
  getMenuByCategory(data: any) {
    return this.menuService.findByCategory(data.category);
  } 
  @MessagePattern({ cmd: 'get_menu_by_name' })
  getMenuByName(data: any) {
    return this.menuService.findByName(data.name);
  } 
  @MessagePattern({ cmd: 'get_menu_by_price' })
  getMenuByPrice(data: any) {
    return this.menuService.findByPrice(data.price);
  }
   
}