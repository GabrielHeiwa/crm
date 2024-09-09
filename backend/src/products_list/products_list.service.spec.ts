import { Test, TestingModule } from '@nestjs/testing';
import { ProductsListService } from './products_list.service';

describe('ProductsListService', () => {
  let service: ProductsListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsListService],
    }).compile();

    service = module.get<ProductsListService>(ProductsListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
