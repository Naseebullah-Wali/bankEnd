import { Model, Column, DataType, Table } from 'sequelize-typescript';

@Table({
  tableName: 'employees',
  timestamps: true,
})
class Employee extends Model<Employee> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  employeeID!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  employeeName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role!: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  salary!: number;
}

export default Employee;
