import { Injectable } from '@nestjs/common';
import { CreateNegotiationDto } from './dto/create-negotiation.dto';
import { UpdateNegotiationDto } from './dto/update-negotiation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsList } from 'src/products_list/entities/products_list.entity';
import { Repository } from 'typeorm';
import { Client } from 'src/clients/entities/client.entity';
import { Negotiation } from './entities/negotiation.entity';

@Injectable()
export class NegotiationsService {
  constructor(
    @InjectRepository(ProductsList)
    private readonly productListRepository: Repository<ProductsList>,

    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,

    @InjectRepository(Negotiation)
    private readonly negotiationRepository: Repository<Negotiation>
  ) { }

  async create(createNegotiationDto: CreateNegotiationDto) {
    try {
      const {
        fkClient,
        fkProductList,
        discount,
        status
      } = createNegotiationDto;

      const client = await this.clientRepository.findOne({ where: { id: fkClient }});
      if (!client) throw new Error("Client not found.");

      const productList = await this.productListRepository.findOne({ where: { id: fkProductList }});
      if (!productList) throw new Error("Product List not found.");

      const negotiationEntity = this.negotiationRepository.create({
        discount,
        status,
        fkProductList: productList,
        fkClient: client
      });

      const negotiation = await this.negotiationRepository.save(negotiationEntity);

      return [undefined, negotiation];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async findAll() {
    try {
      const negotiations = await this.negotiationRepository.find();

      return [undefined, negotiations];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async findOne(id: number) {
    try {
      const negotiation = await this.negotiationRepository.findOne({ where: { id }});
      if (!negotiation) throw new Error("Negotiation not found.");

      return [undefined, negotiation];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async update(id: number, updateNegotiationDto: UpdateNegotiationDto) {
    try {
      const negotiation = await this.negotiationRepository.findOne({ where: { id }});
      if (!negotiation) throw new Error("Negotiation not found.");

      const {
        discount,
        status
      } = updateNegotiationDto;
      const affectedRows = await this.negotiationRepository.update({ id }, { discount, status });

      return [undefined, affectedRows];
    } catch (e: any) {
      return [e, undefined];
    }
  }

  async remove(id: number) {
    try {
      const negotiation = await this.negotiationRepository.findOne({ where: { id }});
      if (!negotiation) throw new Error("Negotiation not found.");

      const affectedRows = await this.negotiationRepository.softDelete({ id });

      return [undefined, affectedRows];
    } catch (e: any) {
      return [e, undefined];
    }
  }
}
