import { Model, Column, DataType, Table, ForeignKey } from 'sequelize-typescript';
import Category from './Categories';

@Table({
  tableName: 'products',
  timestamps: true,
})
class Product extends Model<Product> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  productName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryID!: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  unitPrice!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantityInStock!: number;
}

export default Product;
