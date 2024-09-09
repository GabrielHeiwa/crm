import { Module } from '@nestjs/common';
import { PhysicsProductsService } from './physics_products.service';
import { PhysicsProductsController } from './physics_products.controller';

@Module({
  controllers: [PhysicsProductsController],
  providers: [PhysicsProductsService],
})
export class PhysicsProductsModule {}
