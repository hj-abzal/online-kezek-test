import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { CreateRestaurantsDto } from "./create-restaurants.dto";

@Controller("restaurants")
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {
  }

  @Post()
  createRestaurants(@Body() dto: CreateRestaurantsDto) {
    return this.restaurantService.create(dto);
  }

  @Get()
  getAllRestaurants() {
    return this.restaurantService.getAll();
  }

  @Put("/:id")
  updateRestaurantId(
    @Param("id") id: number,
    @Body() body: CreateRestaurantsDto
  ) {
    return this.restaurantService.update(id, body);
  }

  @Delete("/:id")
  deleteRestaurantId(
    @Param("id") id: number
  ) {
    return this.restaurantService.delete(id);
  }
}
