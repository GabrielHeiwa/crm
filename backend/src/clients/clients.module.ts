import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [
    TypeOrmModule.forFeature([Client, User]),
    DatabaseModule
  ]
})
export class ClientsModule { }
