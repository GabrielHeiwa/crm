import { Test, TestingModule } from '@nestjs/testing';
import { DigitalProductsService } from './digital_products.service';

describe('DigitalProductsService', () => {
  let service: DigitalProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DigitalProductsService],
    }).compile();

    service = module.get<DigitalProductsService>(DigitalProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
