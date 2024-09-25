import { Module } from '@nestjs/common';
import { PhysicsProductsService } from './physics_products.service';
import { PhysicsProductsController } from './physics_products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { PhysicsProduct } from './entities/physics_product.entity';

@Module({
  controllers: [PhysicsProductsController],
  providers: [PhysicsProductsService],
  imports: [
    TypeOrmModule.forFeature([
      Product,
      PhysicsProduct
    ])
  ]
})
export class PhysicsProductsModule {}
