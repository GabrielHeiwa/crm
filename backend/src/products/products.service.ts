import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) { } 

  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create(createProductDto);

      const _product = await this.productRepository.save(product);

      return [
        undefined,
        _product
      ]
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async findAll() {
    try {
      const products = await this.productRepository.find();

      return [undefined, products];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async findOne(id: number) {
    try {
      const productExist = await this.productRepository.findOne({ where: { id }});
      if (!productExist) throw new Error("Product not found.");

      return [
        undefined,
        productExist
      ];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const productExist = await this.productRepository.find({ where: { id }});
      if (!productExist) throw new Error("Product not found.");

      const affectedRows = await this.productRepository.update({ id }, updateProductDto);

      return [undefined, affectedRows];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async remove(id: number) {
    try {
      const productExist = await this.productRepository.find({ where: { id }});
      if(!productExist) throw new Error("Product not found.");

      const affectedRows = await this.productRepository.softDelete({ id });

      return [undefined, affectedRows];
    } catch (e: any) {
      return [e, undefined];
    }

  }
}
