import { Model, Column, DataType, Table, ForeignKey } from 'sequelize-typescript';
import Supplier from './suppliers';

@Table({
  tableName: 'orders',
  timestamps: true,
})
class Order extends Model<Order> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  orderID!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  orderDate!: Date;

  @ForeignKey(() => Supplier)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  supplierID!: number;
}

export default Order;
