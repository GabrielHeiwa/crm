import { Injectable } from '@nestjs/common';
import { CreateDigitalProductDto } from './dto/create-digital_product.dto';
import { UpdateDigitalProductDto } from './dto/update-digital_product.dto';

@Injectable()
export class DigitalProductsService {
  create(createDigitalProductDto: CreateDigitalProductDto) {
    return 'This action adds a new digitalProduct';
  }

  findAll() {
    return `This action returns all digitalProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} digitalProduct`;
  }

  update(id: number, updateDigitalProductDto: UpdateDigitalProductDto) {
    return `This action updates a #${id} digitalProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} digitalProduct`;
  }
}
