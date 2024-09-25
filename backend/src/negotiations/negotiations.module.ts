import { Module } from '@nestjs/common';
import { NegotiationsService } from './negotiations.service';
import { NegotiationsController } from './negotiations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsList } from 'src/products_list/entities/products_list.entity';
import { Client } from 'src/clients/entities/client.entity';
import { Negotiation } from './entities/negotiation.entity';

@Module({
  controllers: [NegotiationsController],
  providers: [NegotiationsService],
  imports: [
    TypeOrmModule.forFeature([
      ProductsList,
      Client,
      Negotiation
    ])
  ]
})
export class NegotiationsModule {}
