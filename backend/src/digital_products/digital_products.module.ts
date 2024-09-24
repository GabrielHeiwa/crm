import { Module } from '@nestjs/common';
import { DigitalProductsService } from './digital_products.service';
import { DigitalProductsController } from './digital_products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DigitalProduct } from './entities/digital_product.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  controllers: [DigitalProductsController],
  providers: [DigitalProductsService],
  imports: [
    TypeOrmModule.forFeature([
      DigitalProduct,
      Product
    ])
  ]
})
export class DigitalProductsModule {}
