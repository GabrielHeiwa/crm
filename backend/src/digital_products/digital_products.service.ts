import { Injectable } from '@nestjs/common';
import { CreateDigitalProductDto } from './dto/create-digital_product.dto';
import { UpdateDigitalProductDto } from './dto/update-digital_product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DigitalProduct } from './entities/digital_product.entity';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class DigitalProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(DigitalProduct)
    private readonly digitalProductRepository: Repository<DigitalProduct>
  ) { }

  async create(createDigitalProductDto: CreateDigitalProductDto) {
    const { name, sellValue, urlToDownload } = createDigitalProductDto;

    const product = this.productRepository.create({
      name,
      sellValue,
    });

    const digitalProduct = this.digitalProductRepository.create({ 
      urlToDownload,
      fkProduct: product
    });

    const saveDigitalProduct = await this.digitalProductRepository.save(digitalProduct);

    return {
      digital_product: saveDigitalProduct,
      message: "Digital product save with success!"
    };
  }

  async findAll() {
    try {
      const digitalProducts = await this.digitalProductRepository.find();

      return [
        undefined,
        digitalProducts
      ];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async findOne(id: number) {
    try {
      const digitalProductExist = await this.digitalProductRepository.findOne({ where: { id }});
      if (!digitalProductExist) throw new Error("Digital Product not found.");

      return [undefined, digitalProductExist];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async update(id: number, updateDigitalProductDto: UpdateDigitalProductDto) {
    try {
      const digitalProductExist = await this.digitalProductRepository.findOne({ where: { id }});
      if (!digitalProductExist) throw new Error("Digital Product not found.");

      const updateDigitalProducts = await this.digitalProductRepository.update({ id }, updateDigitalProductDto);

      return [
        undefined,
        updateDigitalProducts
      ];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async remove(id: number) {
    try {

      const digitalProductExist = await this.digitalProductRepository.findOne({ where: { id }});
      if (!digitalProductExist) throw new Error("Digital Product not found.");

      const affectsRows = await this.digitalProductRepository.softDelete({ id });

      return [
        undefined,
        affectsRows,
      ];
    } catch (e: any) {
      return [
        e,
        undefined
      ];
    }
  }
}
