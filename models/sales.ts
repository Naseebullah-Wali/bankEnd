// sale.model.ts
import { Model, Column, DataType, Table, ForeignKey } from 'sequelize-typescript';
import Customer from './customers';
import Employee from './employees';

@Table({
  tableName: 'sales',
  timestamps: true,
})
class Sale extends Model<Sale> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  saleID!: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customerID!: number;

  @ForeignKey(() => Employee)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  employeeID!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  saleDate!: Date;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  totalAmount!: number;
}

export default Sale;
