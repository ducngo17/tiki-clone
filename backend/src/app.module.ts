import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { ProductsEntity } from './products/products.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersEntity } from './users/users.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'ducngo',
    database: 'products', //name of the database
    entities: [ProductsEntity, UsersEntity],   //entity = table
    synchronize: true,
  }), 
  ProductsModule, AuthModule, UsersModule],
})
export class AppModule { }
