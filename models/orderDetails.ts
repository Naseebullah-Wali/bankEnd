import { Model, Column, DataType, Table, ForeignKey } from 'sequelize-typescript';
import Order from './orders';
import Product from './Product';

@Table({
  tableName: 'orderDetails',
  timestamps: false, // Assuming no timestamps for this table
})
class OrderDetail extends Model<OrderDetail> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  orderDetailID!: number;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  orderID!: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productID!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  unitPrice!: number;
}

export default OrderDetail;
