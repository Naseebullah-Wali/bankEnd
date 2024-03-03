import { Model, Column, DataType, Table } from 'sequelize-typescript';

@Table({
  tableName: 'warehouses',
  timestamps: true,
})
class Warehouse extends Model<Warehouse> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  warehouseID!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  warehouseName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location!: string;
}

export default Warehouse;
