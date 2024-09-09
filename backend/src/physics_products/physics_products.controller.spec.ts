import { Test, TestingModule } from '@nestjs/testing';
import { PhysicsProductsController } from './physics_products.controller';
import { PhysicsProductsService } from './physics_products.service';

describe('PhysicsProductsController', () => {
  let controller: PhysicsProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhysicsProductsController],
      providers: [PhysicsProductsService],
    }).compile();

    controller = module.get<PhysicsProductsController>(PhysicsProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
