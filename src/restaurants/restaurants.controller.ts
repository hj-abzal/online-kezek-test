import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RestaurantsService } from "./restaurants.service";
import { CreateRestaurantsDto } from "./create-restaurants.dto";
import { OrdersService } from "../orders/orders.service";

@Controller("restaurants")
export class RestaurantsController {
  constructor(
    private restaurantService: RestaurantsService,
    private ordersService: OrdersService
  ) {
  }

  @Post()
  async createRestaurants(@Body() dto: CreateRestaurantsDto) {
    const find = await this.restaurantService.getByUrl(dto.url)
    if (find) {
      throw new BadRequestException({message: 'url already exist'});
    }
    return this.restaurantService.create(dto);
  }

  @Get()
  getAllRestaurants() {
    return this.restaurantService.getAll();
  }

  @Get("/:id/orders")
  getOne(
    @Param("id") id: number
  ) {
    return this.ordersService.getAll(id)
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
