import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Restaurants } from "./restaurants.model";
import { CreateRestaurantsDto } from "./create-restaurants.dto";
import { Orders } from "../orders/orders.model";

@Injectable()
export class RestaurantsService {
  constructor(@InjectModel(Restaurants) private restaurantsRepository: typeof Restaurants) {
  }

  async create(dto: CreateRestaurantsDto): Promise<Restaurants> {
    return this.restaurantsRepository.create(dto)
  }

  async delete(id: number): Promise<any> {
    return this.restaurantsRepository.destroy({where: {id}})
      .then(() => {
        return {message: 'ok', id};
      })
      .catch(() => {
        throw new BadRequestException({in: 'delete'});
      });
  }

  async getAll(): Promise<Restaurants[]>  {
    return this.restaurantsRepository.findAll();
  }

  async getOne(id: number): Promise<Restaurants>  {
    return this.restaurantsRepository.findByPk(id, {include: Orders});
  }

  async getByUrl(url: string): Promise<Restaurants>  {
    return this.restaurantsRepository.findOne({where: {url}});
  }

  async update(id: number, atr: CreateRestaurantsDto ): Promise<any> {
    return this.restaurantsRepository.update(
      {...atr},
      {where: {id}}
    ).then(() => {
      return {message: 'ok', atr}
    })
  }
}
