import { Model, Column, DataType, Table } from 'sequelize-typescript';

@Table({
  tableName: 'movies',
  timestamps: false,
})
class Movie extends Model<Movie> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 1900,
      max: 2100,
    },
  })
  year!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  director!: string;

  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  length!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 10,
    },
  })
  rating!: number;
}

export default Movie;
