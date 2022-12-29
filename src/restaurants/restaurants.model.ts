import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Orders } from "../orders/orders.model";
import { ApiProperty } from "@nestjs/swagger";

export interface RestaurantsCreationAttrs {
  title: string,
  img: string
}

@Table({ tableName: "restaurants" })
export class Restaurants extends Model<Restaurants, RestaurantsCreationAttrs> {

  @ApiProperty({example: 1, description: 'Id of restaurant'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: 'burger-king', description: 'url of restaurant'})
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  url: string;

  @ApiProperty({example: 'Burger king', description: 'title of restaurant'})
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({example: 'https//', description: 'img of restaurant'})
  @Column({ type: DataType.STRING, allowNull: false })
  img: string;

  @HasMany(() => Orders)
  orders: Orders[];
}