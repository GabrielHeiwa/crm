import { Injectable } from '@nestjs/common';
import { CreateProductsListDto } from './dto/create-products_list.dto';
import { UpdateProductsListDto } from './dto/update-products_list.dto';

@Injectable()
export class ProductsListService {
  create(createProductsListDto: CreateProductsListDto) {
    return 'This action adds a new productsList';
  }

  findAll() {
    return `This action returns all productsList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsList`;
  }

  update(id: number, updateProductsListDto: UpdateProductsListDto) {
    return `This action updates a #${id} productsList`;
  }

  remove(id: number) {
    return `This action removes a #${id} productsList`;
  }
}
