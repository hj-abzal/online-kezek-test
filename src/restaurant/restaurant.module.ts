import { Module } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { RestaurantController } from "./restaurant.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Restaurants } from "./restaurant.model";

@Module({
  providers: [RestaurantService],
  controllers: [RestaurantController],
  imports: [
    SequelizeModule.forFeature([Restaurants]),
  ]
})
export class RestaurantModule {}
