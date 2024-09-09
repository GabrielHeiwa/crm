import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.getOrThrow("DATABASE_HOST"),
        port: Number(configService.getOrThrow("DATABASE_PORT")),
        username: configService.getOrThrow("DATABASE_USERNAME"),
        password: configService.getOrThrow("DATABASE_PASSWORD"),
        database: configService.getOrThrow("DATABASE_NAME"),
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      }),
      inject: [ConfigService]
    })
  ]
})
export class DatabaseModule { }
