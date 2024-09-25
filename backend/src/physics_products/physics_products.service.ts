import { Injectable } from '@nestjs/common';
import { CreatePhysicsProductDto } from './dto/create-physics_product.dto';
import { UpdatePhysicsProductDto } from './dto/update-physics_product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { PhysicsProduct } from './entities/physics_product.entity';

@Injectable()
export class PhysicsProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(PhysicsProduct)
    private readonly physicProductRepository: Repository<PhysicsProduct>
  ) { }

  async create(createPhysicsProductDto: CreatePhysicsProductDto) {
    try {
      const {
        costValue,
        description,
        name,
        sellValue
      } = createPhysicsProductDto;

      const productEntity = this.productRepository.create({
        name,
        sellValue,
        description
      });

      const physicsProductEntity = this.physicProductRepository.create({
        costValue,
        fkProduct: productEntity
      });

      const physicsProduct = await this.physicProductRepository.save(physicsProductEntity);

      return [undefined, physicsProduct];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async findAll() {
    try {
      const physicsProducts = await this.physicProductRepository.find();

      return [undefined, physicsProducts];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async findOne(id: number) {
    try {
      const physicsProduct = await this.physicProductRepository.findOne({ where: { id }});
      if (!physicsProduct) throw new Error("Physics Product not found.");

      return [undefined]
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async update(id: number, updatePhysicsProductDto: UpdatePhysicsProductDto) {
    try {
      const physicsProduct = await this.physicProductRepository.findOne({ where: { id }});
      if (!physicsProduct) throw new Error("Physic Product not found.");

      const affectedRows = await this.physicProductRepository.update({ id }, updatePhysicsProductDto);

      return [undefined, affectedRows];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async remove(id: number) {
    try {
      const physicsProduct = await this.physicProductRepository.findOne({ where: { id }});
      if (!physicsProduct) throw new Error("Physic Product not found.");

      const affectedRows = await this.physicProductRepository.softDelete({ id });

      return [undefined, affectedRows];
    } catch (e: any) {
      return [e, undefined];
    }
  }
}
