import { Test, TestingModule } from '@nestjs/testing';
import { PhysicsProductsService } from './physics_products.service';

describe('PhysicsProductsService', () => {
  let service: PhysicsProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhysicsProductsService],
    }).compile();

    service = module.get<PhysicsProductsService>(PhysicsProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
