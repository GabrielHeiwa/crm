import { Module } from '@nestjs/common';
import { DigitalProductsService } from './digital_products.service';
import { DigitalProductsController } from './digital_products.controller';

@Module({
  controllers: [DigitalProductsController],
  providers: [DigitalProductsService],
})
export class DigitalProductsModule {}
