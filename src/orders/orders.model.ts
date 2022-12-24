import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Restaurants } from "../restaurants/restaurants.model";

export interface OrdersCreationAttrs {
  key: string,
  restaurant_id: number
}

@Table({ tableName: "orders" })
export class Orders extends Model<Orders, OrdersCreationAttrs> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  key: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_ready: boolean;

  @ForeignKey(() => Restaurants)
  @Column({ type: DataType.INTEGER, allowNull: false })
  restaurant_id: number;

  @BelongsTo(() => Restaurants)
  restaurant: Restaurants;
}