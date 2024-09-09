import { Injectable } from '@nestjs/common';
import { CreatePhysicsProductDto } from './dto/create-physics_product.dto';
import { UpdatePhysicsProductDto } from './dto/update-physics_product.dto';

@Injectable()
export class PhysicsProductsService {
  create(createPhysicsProductDto: CreatePhysicsProductDto) {
    return 'This action adds a new physicsProduct';
  }

  findAll() {
    return `This action returns all physicsProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} physicsProduct`;
  }

  update(id: number, updatePhysicsProductDto: UpdatePhysicsProductDto) {
    return `This action updates a #${id} physicsProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} physicsProduct`;
  }
}
