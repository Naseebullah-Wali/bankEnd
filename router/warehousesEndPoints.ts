import express from "express"
import { WarehouseController } from "../controllers/warehousesControllers";
const warehouseRouter:express.Router = express.Router();


warehouseRouter.post('/warehouse', WarehouseController.createWarehouse);

warehouseRouter.get('/warehouse',  WarehouseController.getAllWarehouses)


warehouseRouter.get('/warehouse/:id',WarehouseController.getWarehouseById)


warehouseRouter.put('/warehouse/:id',WarehouseController.updateWarehouse)


warehouseRouter.delete('/warehouse/:id',WarehouseController.deleteWarehouse)



export default warehouseRouter;