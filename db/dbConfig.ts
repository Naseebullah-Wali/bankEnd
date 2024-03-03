// instance of sequelize
import {Sequelize} from 'sequelize-typescript';
import User from '../models/user';
import Movies from '../models/movies'
import Categories from '../models/Categories'
import Product from '../models/Product'
import customers from '../models/customers'
import employees from '../models/employees'
import orderDetails from '../models/orderDetails'
import orders from '../models/orders'
import productWarehouses from '../models/productWarehouses'
import sales from '../models/sales'
import salesDetails from '../models/salesDetails'
import suppliesrs from '../models/suppliers'
import warehouses from '../models/warehouses'
// import Product from '../models/product';


require("dotenv").config();

const sequelize:Sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: 'sqlite',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    storage: 'db/dev.sqlite'
    

});
const models = [User,Movies,Product,Categories,sales,salesDetails,warehouses,suppliesrs,productWarehouses,orders,orderDetails,employees,customers]

sequelize.addModels(models)


sequelize.sync().then(()=>{
    console.log("database is synced")
}).catch(
    (e)=>console.log(e)
)

export default sequelize;