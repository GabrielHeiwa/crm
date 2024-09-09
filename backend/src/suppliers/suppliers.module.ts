import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Supplier } from './entities/supplier.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [SuppliersController],
  providers: [SuppliersService],
  imports: [
    TypeOrmModule.forFeature([User, Supplier]),
    DatabaseModule
  ]
})
export class SuppliersModule { }
