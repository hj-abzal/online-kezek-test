import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RestaurantsService } from "./restaurants.service";
import { CreateRestaurantsDto } from "./create-restaurants.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Restaurants } from "./restaurants.model";

@ApiTags('Restaurants')
@Controller("restaurants")
export class RestaurantsController {
  constructor(
    private restaurantService: RestaurantsService,
  ) {
  }


  @ApiOperation({summary: 'Create new restaurant'})
  @ApiResponse({status: 200, type: Restaurants})
  @Post()
  async createRestaurants(@Body() dto: CreateRestaurantsDto) {
    const find = await this.restaurantService.getByUrl(dto.url)
    if (find) {
      throw new BadRequestException({message: 'url already exist'});
    }
    return this.restaurantService.create(dto);
  }

  @ApiOperation({summary: 'get all restaurants'})
  @ApiResponse({status: 200, type: [Restaurants]})
  @Get()
  getAllRestaurants() {
    return this.restaurantService.getAll();
  }

  @ApiOperation({summary: 'get orders of restaurant'})
  @ApiResponse({status: 200, type: Restaurants})
  @Get("/:id/orders")
  getOne(
    @Param("id") id: number
  ) {
    return this.restaurantService.getOne(id)
  }


  @ApiOperation({summary: 'update restaurant info'})
  @ApiResponse({status: 200})
  @Put("/:id")
  updateRestaurantId(
    @Param("id") id: number,
    @Body() body: CreateRestaurantsDto
  ) {
    return this.restaurantService.update(id, body);
  }

  @ApiOperation({summary: 'delete restaurant'})
  @ApiResponse({status: 200})
  @Delete("/:id")
  deleteRestaurantId(
    @Param("id") id: number
  ) {
    return this.restaurantService.delete(id);
  }
}
