import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./create-order.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Orders } from "./orders.model";

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {
  }


  @ApiOperation({summary: 'Create new order'})
  @ApiResponse({status: 200, type: Orders})
  @Post()
  createOrder(@Body() dto: CreateOrderDto) {
    return this.ordersService.create(dto);
  }


  @ApiOperation({summary: 'update order'})
  @ApiResponse({status: 200})
  @Put("/:id")
  updateOrderById(
    @Param("id") id: number,
    @Body() body: {is_ready: boolean}
  ) {
    return this.ordersService.update(id, body.is_ready);
  }

  @ApiOperation({summary: 'delete order'})
  @ApiResponse({status: 200})
  @Delete("/:id")
  deleteOrderById(
    @Param("id") id: number
  ) {
    return this.ordersService.delete(id);
  }
}
