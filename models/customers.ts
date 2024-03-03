import { Model, Column, DataType, Table } from 'sequelize-typescript';

@Table({
  tableName: 'customers',
  timestamps: true,
})
class Customer extends Model<Customer> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  customerID!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  customerName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contactInfo!: string;
}

export default Customer;
