import { Column, DataType, Table } from "sequelize-typescript";
import { Model } from "sequelize";

export interface RestaurantsCreationAttrs {
  title: string,
  img: string
}

@Table({ tableName: "restaurants" })
export class Restaurants extends Model<Restaurants, RestaurantsCreationAttrs> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  img: string;
}