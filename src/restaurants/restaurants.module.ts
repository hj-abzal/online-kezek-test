import { Module } from "@nestjs/common";
import { RestaurantsService } from "./restaurants.service";
import { RestaurantsController } from "./restaurants.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Restaurants } from "./restaurants.model";
import { OrdersModule } from "../orders/orders.module";
import { Orders } from "../orders/orders.model";

@Module({
  providers: [RestaurantsService],
  controllers: [RestaurantsController],
  imports: [
    SequelizeModule.forFeature([Restaurants, Orders]),
    OrdersModule
  ]
})
export class RestaurantsModule {
}
