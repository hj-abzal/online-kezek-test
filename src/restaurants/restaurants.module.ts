import { Module } from "@nestjs/common";
import { RestaurantsService } from "./restaurants.service";
import { RestaurantsController } from "./restaurants.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Restaurants } from "./restaurants.model";

@Module({
  providers: [RestaurantsService],
  controllers: [RestaurantsController],
  imports: [
    SequelizeModule.forFeature([Restaurants])
  ]
})
export class RestaurantsModule {
}
