import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./create-order.dto";

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {
  }


  @Post()
  createOrder(@Body() dto: CreateOrderDto) {
    return this.ordersService.create(dto);
  }


  @Put("/:id")
  updateOrderById(
    @Param("id") id: number,
    @Body() body: {is_ready: boolean}
  ) {
    return this.ordersService.update(id, body.is_ready);
  }

  @Delete("/:id")
  deleteOrderById(
    @Param("id") id: number
  ) {
    return this.ordersService.delete(id);
  }
}
