import { Module } from '@nestjs/common';
import { ProductsListService } from './products_list.service';
import { ProductsListController } from './products_list.controller';

@Module({
  controllers: [ProductsListController],
  providers: [ProductsListService],
})
export class ProductsListModule {}
