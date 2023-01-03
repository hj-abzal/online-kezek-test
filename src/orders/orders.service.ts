import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Orders } from "./orders.model";
import { CreateOrderDto } from "./create-order.dto";

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Orders) private ordersRepository: typeof Orders) {
  }

  async create(dto: CreateOrderDto): Promise<Orders> {
    const key = this.getRandomKey();
    return this.ordersRepository.create({ ...dto, key })
  }

  async delete(id: number): Promise<any> {
    return this.ordersRepository.destroy({where: {id}})
      .then(() => {
        return {message: 'ok', id};
      })
      .catch(() => {
        throw new BadRequestException({in: 'delete'});
      });
  }

  async getAll(restaurant_id: number): Promise<Orders[]>  {
    return this.ordersRepository.findAll({where: {restaurant_id}});
  }

  async update(id: number, is_ready: boolean ): Promise<any> {
    return this.ordersRepository.update(
      {is_ready},
      {where: {id}}
    ).then(() => {
      return {message: 'ok', is_ready}
    })
  }


  getRandomKey = () => {
    return `${this.toAlpha(this.getRandomInt(27))}-${this.getRandomInt(1000)}`
  }

  getRandomInt(max:  number) {
    return Math.floor(Math.random() * max);
  }

  toAlpha = (num:  number) => {
    const leveller = 64;
    return String.fromCharCode(num + leveller);
  };
}
