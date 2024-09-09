import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhysicsProductsService } from './physics_products.service';
import { CreatePhysicsProductDto } from './dto/create-physics_product.dto';
import { UpdatePhysicsProductDto } from './dto/update-physics_product.dto';

@Controller('physics-products')
export class PhysicsProductsController {
  constructor(private readonly physicsProductsService: PhysicsProductsService) {}

  @Post()
  create(@Body() createPhysicsProductDto: CreatePhysicsProductDto) {
    return this.physicsProductsService.create(createPhysicsProductDto);
  }

  @Get()
  findAll() {
    return this.physicsProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.physicsProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhysicsProductDto: UpdatePhysicsProductDto) {
    return this.physicsProductsService.update(+id, updatePhysicsProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.physicsProductsService.remove(+id);
  }
}
