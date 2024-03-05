import express from "express";
import { ProductWarehouseController } from "../controllers/productsWarehoursesControllers";

const productWarehouseRouter: express.Router = express.Router();

// Create a new product warehouse
productWarehouseRouter.post('/productWarehouses', ProductWarehouseController.createProductWarehouse);

// Get all product warehouses
productWarehouseRouter.get('/productWarehouses', ProductWarehouseController.getAllProductWarehouses);

// Get a product warehouse by product ID and warehouse ID
productWarehouseRouter.get('/productWarehouses/:productID/:warehouseID', ProductWarehouseController.getProductWarehouseByIds);

// Update a product warehouse by product ID and warehouse ID
productWarehouseRouter.put('/productWarehouses/:productID/:warehouseID', ProductWarehouseController.updateProductWarehouse);

// Delete a product warehouse by product ID and warehouse ID
productWarehouseRouter.delete('/productWarehouses/:productID/:warehouseID', ProductWarehouseController.deleteProductWarehouse);

export default productWarehouseRouter;
