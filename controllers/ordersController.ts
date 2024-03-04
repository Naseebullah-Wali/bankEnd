import express from 'express';
import Order from '../models/orders';
import Supplier from '../models/suppliers';

export class OrderController {

    // Create Order
    public static createOrder = async (req: express.Request, res: express.Response) => {
        try {
            const { orderDate, supplierID } = req.body;
            if (!orderDate || !supplierID) {
                return res.status(400).json({ message: 'Order date and supplier ID are required' });
            }
            const existingSupplier = await Supplier.findByPk(supplierID);
            if (!existingSupplier) {
                return res.status(400).json({ message: 'Supplier not found' });
            }
            const order = await Order.create(req.body);
            res.status(201).json(order);
        } catch (error) {
            console.error('Error creating order:', error);
            res.status(500).json({ message: 'Failed to create order' });
        }
    }

    // Get all Orders
    public static getAllOrders = async (req: express.Request, res: express.Response) => {
        try {
            const orders = await Order.findAll();
            res.status(200).json(orders);
        } catch (error) {
            console.error('Error getting orders:', error);
            res.status(500).json({ message: 'Failed to get orders' });
        }
    }

    // Get Order by ID
    public static getOrderById = async (req: express.Request, res: express.Response) => {
        try {
            const orderId = parseInt(req.params.id);
            if (!orderId) {
                return res.status(400).json({ message: 'Invalid order ID' });
            }
            const order = await Order.findByPk(orderId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        } catch (error) {
            console.error('Error getting order by ID:', error);
            res.status(500).json({ message: 'Failed to get order' });
        }
    }

    // Update Order
    public static updateOrder = async (req: express.Request, res: express.Response) => {
        try {
            const orderId = parseInt(req.params.id);
            if (!orderId) {
                return res.status(400).json({ message: 'Invalid order ID' });
            }
            const order = await Order.findByPk(orderId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            await order.update(req.body);
            res.status(200).json(order);
        } catch (error) {
            console.error('Error updating order:', error);
            res.status(500).json({ message: 'Failed to update order' });
        }
    }

    // Delete Order
    public static deleteOrder = async (req: express.Request, res: express.Response) => {
        try {
            const orderId = parseInt(req.params.id);
            if (!orderId) {
                return res.status(400).json({ message: 'Invalid order ID' });
            }
            const order = await Order.findByPk(orderId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            await order.destroy();
            res.status(204).json({ message: 'Order deleted successfully' });
        } catch (error) {
            console.error('Error deleting order:', error);
            res.status(500).json({ message: 'Failed to delete order' });
        }
    }
}