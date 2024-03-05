import express from "express";
import { OrderController } from "../controllers/ordersController";

const orderRouter: express.Router = express.Router();

// Create a new order
orderRouter.post('/orders', OrderController.createOrder);

// Get all orders
orderRouter.get('/orders', OrderController.getAllOrders);

// Get an order by ID
orderRouter.get('/orders/:id', OrderController.getOrderById);

// Update an order by ID
orderRouter.put('/orders/:id', OrderController.updateOrder);

// Delete an order by ID
orderRouter.delete('/orders/:id', OrderController.deleteOrder);

export default orderRouter;
