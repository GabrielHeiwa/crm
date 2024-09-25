import { Module } from '@nestjs/common';
import { ProductsListService } from './products_list.service';
import { ProductsListController } from './products_list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsList } from './entities/products_list.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  controllers: [ProductsListController],
  providers: [ProductsListService],
  imports: [
    TypeOrmModule.forFeature([ProductsList, Product])
  ]
})
export class ProductsListModule { }
