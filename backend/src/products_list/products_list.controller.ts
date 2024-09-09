import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsListService } from './products_list.service';
import { CreateProductsListDto } from './dto/create-products_list.dto';
import { UpdateProductsListDto } from './dto/update-products_list.dto';

@Controller('products-list')
export class ProductsListController {
  constructor(private readonly productsListService: ProductsListService) {}

  @Post()
  create(@Body() createProductsListDto: CreateProductsListDto) {
    return this.productsListService.create(createProductsListDto);
  }

  @Get()
  findAll() {
    return this.productsListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsListDto: UpdateProductsListDto) {
    return this.productsListService.update(+id, updateProductsListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsListService.remove(+id);
  }
}
