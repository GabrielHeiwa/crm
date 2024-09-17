import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const { cpf, password, cnpj, name } = createUserDto;
      const user = this.userRepository.create({
        cpf,
        password,
        cnpj,
        name
      });
      await this.userRepository.save(user);

      return [undefined, user];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async findAll() {
    try {
      const users = await this.userRepository.find();

      return [undefined, users];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) throw new Error("User not exist.");

      return [undefined, user];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) throw new Error("User not exist.");

      const userUpdated = await this.userRepository.update({ id }, updateUserDto);

      return [undefined, userUpdated];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }

  async remove(id: number) {
    try {
      await this.userRepository.softDelete({ id });

      return [undefined, true];
    } catch (e: any) {
      return [e.message, undefined];
    }
  }
}
