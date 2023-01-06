import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Restaurants } from "./restaurants.model";
import { CreateRestaurantsDto } from "./create-restaurants.dto";
import { Orders } from "../orders/orders.model";

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel(Restaurants) private restaurantsRepository: typeof Restaurants,
    @InjectModel(Orders) private ordersRepository: typeof Orders
  ) {
  }

  async create(dto: CreateRestaurantsDto): Promise<Restaurants> {
    return this.restaurantsRepository.create(dto);
  }

  async delete(id: number): Promise<any> {
    try {
      await this.ordersRepository.destroy({ where: { restaurant_id: id } });
      try {
        const deletedRows = await this.restaurantsRepository.destroy({ where: { id } })
        if (deletedRows === 1) {
          return { message: "ok", id };
        } else {
          throw new BadRequestException({ in: "no such element" });
        }
      } catch (e) {
        throw new BadRequestException({ in: "delete restaurant" });
      }
    } catch (e) {
      throw new BadRequestException({ in: "delete all orders" });
    }
  }

  async getAll(): Promise<Restaurants[]> {
    return this.restaurantsRepository.findAll();
  }

  async getOne(id: number): Promise<Restaurants> {
    return this.restaurantsRepository.findByPk(id, { include: Orders });
  }

  async getByUrl(url: string): Promise<Restaurants> {
    return this.restaurantsRepository.findOne({ where: { url } });
  }

  async update(id: number, atr: CreateRestaurantsDto): Promise<any> {
    return this.restaurantsRepository.update(
      { ...atr },
      { where: { id } }
    ).then(() => {
      return { message: "ok", atr };
    });
  }
}
