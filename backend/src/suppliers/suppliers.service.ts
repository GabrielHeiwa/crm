import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepostory: Repository<User>,

    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>
  ) { }

  async create(createSupplierDto: CreateSupplierDto) {
    try {
      const { cnpj, name, email, password } = createSupplierDto;

      const user = this.userRepostory.create({
        cnpj,
        name,
        password
      });

      await this.userRepostory.save(user);

      const supplier = this.supplierRepository.create({
        cnpj,
        email,
        fkUser: user
      });

      await this.supplierRepository.save(supplier);

      return [undefined, supplier];

    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async findAll() {
    try {
      const suppliers = await this.supplierRepository.find();

      return [undefined, suppliers];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async findOne(id: number) {
    try {
      const supplier = await this.supplierRepository.findOne({ where: { id } });
      if (!supplier) throw new Error("Supplier not exist.");

      return [undefined, supplier];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    try {
      const supplier = await this.supplierRepository.findOne({ where: { id } });
      if (!supplier) throw new Error("Supplier not exist.");
      
      const supplierUpdate = await this.supplierRepository.update({ id }, updateSupplierDto);

      return [undefined, supplierUpdate];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async remove(id: number) {
    try {
      const supplierDeleted = await this.supplierRepository.softDelete({ id });
      
      return [undefined, supplierDeleted];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }
}
