import { Model, Column, DataType, Table, ForeignKey } from 'sequelize-typescript';

@Table({
  tableName: 'categories',
  timestamps: true,
})
class Category extends Model<Category> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  categoryName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  imageURL!: string;
}

export default Category;
