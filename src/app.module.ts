import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { RestaurantsModule } from "./restaurants/restaurants.module";
import { Restaurants } from "./restaurants/restaurants.model";
import { OrdersModule } from "./orders/orders.module";
import { Orders } from "./orders/orders.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      ssl: false,
      models: [Restaurants, Orders],
      autoLoadModels: true
    }),
    RestaurantsModule,
    OrdersModule,
  ],
})
export class AppModule {

}
