import { Test, TestingModule } from '@nestjs/testing';
import { DigitalProductsController } from './digital_products.controller';
import { DigitalProductsService } from './digital_products.service';

describe('DigitalProductsController', () => {
  let controller: DigitalProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DigitalProductsController],
      providers: [DigitalProductsService],
    }).compile();

    controller = module.get<DigitalProductsController>(DigitalProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
