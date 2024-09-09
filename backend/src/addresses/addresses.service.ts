import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>
  ) { }

  async create(createAddressDto: CreateAddressDto, userId: number) {
    try {
      const { city, country, neightborhood, state, street, zipCode } = createAddressDto;

      const user = await this.userRepository.findOne({ where: { id: userId }});
      if (!user) throw new Error("User not exist.");

      const address = this.addressRepository.create({
        city,
        country,
        neightborhood,
        state,
        street,
        zipCode,
        fkUser: user
      });

      await this.addressRepository.save(address);

      return [undefined, address];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async findAll() {
    try {
      const addresses = await this.addressRepository.find();

      return [undefined, addresses];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async findOne(id: number) {
    try {
      const address = await this.addressRepository.findOne({ where: { id }});
      if (!address) throw new Error("Address not exist.");

      return [undefined, address];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    try {
      const address = await this.addressRepository.findOne({ where: { id }});
      if (!address) throw new Error("Address not exist.");

      const updatedAddress = await this.addressRepository.update({ id }, updateAddressDto);

      return [undefined, updatedAddress];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async remove(id: number) {
    try {
      const deleteAddress = await this.addressRepository.softDelete({ id });

      return [undefined, deleteAddress];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }
}
