import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Restaurants } from "../restaurants/restaurants.model";
import { ApiProperty } from "@nestjs/swagger";

export interface OrdersCreationAttrs {
  key: string,
  restaurant_id: number
}

@Table({ tableName: "orders" })
export class Orders extends Model<Orders, OrdersCreationAttrs> {

  @ApiProperty({example: 1, description: 'Id of order'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: 'K-29', description: 'Key of order'})
  @Column({ type: DataType.STRING, allowNull: false })
  key: string;

  @ApiProperty({example: false, description: 'status of order'})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_ready: boolean;

  @ApiProperty({example: 1, description: 'id of restaurant'})
  @ForeignKey(() => Restaurants)
  @Column({ type: DataType.INTEGER, allowNull: false })
  restaurant_id: number;

  @BelongsTo(() => Restaurants)
  restaurant: Restaurants;
}