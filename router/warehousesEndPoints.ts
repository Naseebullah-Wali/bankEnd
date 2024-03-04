import express from "express"
import { WarehouseController } from "../controllers/warehousesControllers";
const warehouseRouter:express.Router = express.Router();


//Register
warehouseRouter.post('/movies', WarehouseController.createWarehouse);

//Login
// warehouseRouter.patch('/movies/:id',movieControllers.patchMovie)

//Show all users
warehouseRouter.get('/movies',  WarehouseController.getAllWarehouses)

//FindById
warehouseRouter.get('/movies/:id',WarehouseController.getWarehouseById)

//UpdateById
warehouseRouter.put('/movies/:id',WarehouseController.updateWarehouse)

//DeleteById
warehouseRouter.delete('/movies/:id',WarehouseController.deleteWarehouse)



export default warehouseRouter;