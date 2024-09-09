import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DigitalProductsService } from './digital_products.service';
import { CreateDigitalProductDto } from './dto/create-digital_product.dto';
import { UpdateDigitalProductDto } from './dto/update-digital_product.dto';

@Controller('digital-products')
export class DigitalProductsController {
  constructor(private readonly digitalProductsService: DigitalProductsService) {}

  @Post()
  create(@Body() createDigitalProductDto: CreateDigitalProductDto) {
    return this.digitalProductsService.create(createDigitalProductDto);
  }

  @Get()
  findAll() {
    return this.digitalProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.digitalProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDigitalProductDto: UpdateDigitalProductDto) {
    return this.digitalProductsService.update(+id, updateDigitalProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.digitalProductsService.remove(+id);
  }
}
