import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from './clients/clients.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { AddressesModule } from './addresses/addresses.module';
import { DigitalProductsModule } from './digital_products/digital_products.module';
import { PhysicsProductsModule } from './physics_products/physics_products.module';
import { ProductsListModule } from './products_list/products_list.module';
import { NegotiationsModule } from './negotiations/negotiations.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    DatabaseModule,
    ClientsModule,
    SuppliersModule,
    AddressesModule,
    DigitalProductsModule,
    PhysicsProductsModule,
    ProductsListModule,
    NegotiationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
