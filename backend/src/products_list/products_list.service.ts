import { Injectable } from '@nestjs/common';
import { CreateProductsListDto } from './dto/create-products_list.dto';
import { UpdateProductsListDto } from './dto/update-products_list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsList } from './entities/products_list.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class ProductsListService {

  constructor(
    @InjectRepository(ProductsList)
    private readonly productListRepository: Repository<ProductsList>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) { }

  async create(createProductsListDto: CreateProductsListDto) {
    try {
      const product = await this.productRepository.findOne({ where: { id: createProductsListDto.fkProduct }});
      if (!product) throw new Error("Product not found.");

      const productListEntity = this.productListRepository.create({
        sequence: createProductsListDto.sequence,
        fkProduct: product,
      });

      const productList = await this.productListRepository.save(productListEntity);

      return [
        undefined,
        productList
      ];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async findAll() {
    try {
      const productList = await this.productListRepository.find();
      
      return [undefined, productList];
    } catch(e: any) {
      return [e, undefined];
    }
  }

  async findOne(id: number) {
    try {
      const productList = await this.productListRepository.findOne({ where: { id }});
      if (!productList) throw new Error("Product List not found.");

      return [undefined, productList];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async update(id: number, updateProductsListDto: UpdateProductsListDto) {
    try {
      const productList = await this.productListRepository.findOne({ where: { id }});
      if (!productList) throw new Error("Product List not found.");

      const affectedRows = await this.productListRepository.update({ id }, { sequence: updateProductsListDto.sequence });

      return [undefined, affectedRows];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async remove(id: number) {
    try {
      const productList = await this.productListRepository.findOne({ where: { id }});
      if (!productList) throw new Error("Product List not found.");
      
      const affectedRows = await this.productListRepository.softDelete({ id });
    
      return [undefined, affectedRows];
    } catch(e: any) {
      return [e, undefined];
    }
  }
}
