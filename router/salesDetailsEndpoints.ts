import express from "express";
import { SaleDetailController } from "../controllers/saleDetailsControllers";

const saleDetailRouter: express.Router = express.Router();

// Create a new sale detail
saleDetailRouter.post('/saleDetails', SaleDetailController.createSaleDetail);

// Get all sale details
saleDetailRouter.get('/saleDetails', SaleDetailController.getAllSaleDetails);

// Get a sale detail by ID
saleDetailRouter.get('/saleDetails/:id', SaleDetailController.getSaleDetailById);

// Update a sale detail by ID
saleDetailRouter.put('/saleDetails/:id', SaleDetailController.updateSaleDetail);

// Delete a sale detail by ID
saleDetailRouter.delete('/saleDetails/:id', SaleDetailController.deleteSaleDetail);

export default saleDetailRouter;
