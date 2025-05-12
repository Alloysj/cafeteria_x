import { Test, TestingModule } from '@nestjs/testing';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

describe('MenuController', () => {
  let menuController: MenuController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MenuController],
      providers: [MenuService],
    }).compile();

    menuController = app.get<MenuController>(MenuController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(menuController.getHello()).toBe('Hello World!');
    });
  });
});
