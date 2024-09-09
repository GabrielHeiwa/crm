import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Address } from './entities/address.entity';

@Module({
  controllers: [AddressesController],
  providers: [AddressesService],
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([User, Address])
  ]
})
export class AddressesModule { }
