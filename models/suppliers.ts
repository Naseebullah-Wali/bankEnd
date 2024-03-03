import { Model, Column, DataType, Table } from 'sequelize-typescript';

@Table({
  tableName: 'suppliers',
  timestamps: true,
})
class Supplier extends Model<Supplier> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  supplierID!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  supplierName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contactInfo!: string;
}

export default Supplier;
