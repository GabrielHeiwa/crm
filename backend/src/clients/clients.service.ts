import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async create(createClientDto: CreateClientDto) {
    try {
      const { email, name, cnpj, cpf, password } = createClientDto;
      
      const user = this.userRepository.create({
        cpf,
        cnpj,
        name,
        password
      });
      
      await this.userRepository.save(user);

      const client = this.clientRepository.create({
        cnpj,
        cpf,
        email,
        fkUser: user
      });

      await this.clientRepository.save(client);

      return [undefined, client];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async findAll() {
    try {
      const clients = await this.clientRepository.find();

      return [undefined, clients];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async findOne(id: number) {
    try {
      const client = await this.clientRepository.findOne({ where: { id } });
      if (!client) throw new Error("Client not exist.");

      return [undefined, client];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    try {
      const client = await this.clientRepository.findOne({ where: { id } });
      if (!client) throw new Error("Client not exist.");

      const clientUpdated = await this.clientRepository.update({ id }, updateClientDto);

      return [undefined, clientUpdated];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async remove(id: number) {
    try {
      await this.clientRepository.softDelete({ id });

      return [undefined, true];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }
}
