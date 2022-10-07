import { Model, PrimaryKey, Column, Table } from "sequelize-typescript";

@Table({ tableName: "products", timestamps: false })
export default class ProductModel extends Model {
  @PrimaryKey
  @Column
  id!: string;

  @Column
  name!: string;

  @Column
  cost!: number;

  @Column
  salesPrice!: number;
}
