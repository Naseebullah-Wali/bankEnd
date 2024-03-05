import express from "express";
import { OrderDetailController } from "../controllers/orderDetailsControllers";

const orderDetailRouter: express.Router = express.Router();

// Create a new order detail
orderDetailRouter.post('/orderDetails', OrderDetailController.createOrderDetail);

// Get all order details
orderDetailRouter.get('/orderDetails', OrderDetailController.getAllOrderDetails);

// Get an order detail by ID
orderDetailRouter.get('/orderDetails/:id', OrderDetailController.getOrderDetailById);

// Update an order detail by ID
orderDetailRouter.put('/orderDetails/:id', OrderDetailController.updateOrderDetail);

// Delete an order detail by ID
orderDetailRouter.delete('/orderDetails/:id', OrderDetailController.deleteOrderDetail);

export default orderDetailRouter;
