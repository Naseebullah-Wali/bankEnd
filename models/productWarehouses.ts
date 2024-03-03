// ProductWarehouse.model.ts
import { Model, Column, DataType, Table, ForeignKey } from 'sequelize-typescript';
import Product from './Product';
import Warehouse from './warehouses';

@Table({
  tableName: 'product_warehouses',
  timestamps: false, // Assuming no timestamps for this table
})
class ProductWarehouse extends Model<ProductWarehouse> {
  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  productID!: number;

  @ForeignKey(() => Warehouse)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  warehouseID!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;
}

export default ProductWarehouse;
