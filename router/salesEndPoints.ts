import express from "express";
import { SaleController } from "../controllers/salesControllers";

const saleRouter: express.Router = express.Router();

// Create a new sale
saleRouter.post('/sales', SaleController.createSale);

// Get all sales
saleRouter.get('/sales', SaleController.getAllSales);

// Get a sale by ID
saleRouter.get('/sales/:id', SaleController.getSaleById);

// Update a sale by ID
saleRouter.put('/sales/:id', SaleController.updateSale);

// Delete a sale by ID
saleRouter.delete('/sales/:id', SaleController.deleteSale);

export default saleRouter;
