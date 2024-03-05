import express from "express";
import { SupplierController } from "../controllers/suppliersControllers";

const supplierRouter: express.Router = express.Router();

// Create a new supplier
supplierRouter.post('/suppliers', SupplierController.createSupplier);

// Get all suppliers
supplierRouter.get('/suppliers', SupplierController.getAllSuppliers);

// Get a supplier by ID
supplierRouter.get('/suppliers/:id', SupplierController.getSupplierById);

// Update a supplier by ID
supplierRouter.put('/suppliers/:id', SupplierController.updateSupplier);

// Delete a supplier by ID
supplierRouter.delete('/suppliers/:id', SupplierController.deleteSupplier);

export default supplierRouter;
