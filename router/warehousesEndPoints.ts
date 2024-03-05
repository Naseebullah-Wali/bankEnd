import express from "express"
import { WarehouseController } from "../controllers/warehousesControllers";
const warehouseRouter:express.Router = express.Router();


warehouseRouter.post('/movies', WarehouseController.createWarehouse);

warehouseRouter.get('/movies',  WarehouseController.getAllWarehouses)


warehouseRouter.get('/movies/:id',WarehouseController.getWarehouseById)


warehouseRouter.put('/movies/:id',WarehouseController.updateWarehouse)


warehouseRouter.delete('/movies/:id',WarehouseController.deleteWarehouse)



export default warehouseRouter;