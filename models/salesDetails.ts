import { Model, Column, DataType, Table, ForeignKey } from 'sequelize-typescript';
import Sale from './sales';
import Product from './Product';

@Table({
  tableName: 'saleDetails',
  timestamps: false,
})
class SaleDetail extends Model<SaleDetail> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  saleDetailID!: number;

  @ForeignKey(() => Sale)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  saleID!: number;

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

export default SaleDetail;
