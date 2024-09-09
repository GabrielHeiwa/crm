import { Test, TestingModule } from '@nestjs/testing';
import { ProductsListController } from './products_list.controller';
import { ProductsListService } from './products_list.service';

describe('ProductsListController', () => {
  let controller: ProductsListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsListController],
      providers: [ProductsListService],
    }).compile();

    controller = module.get<ProductsListController>(ProductsListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
