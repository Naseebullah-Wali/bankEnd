import express from 'express';
import OrderDetail from '../models/orderDetails';
import Order from '../models/orders';
import Product from '../models/Product';

export class OrderDetailController {

    // Create OrderDetail
    public static createOrderDetail = async (req: express.Request, res: express.Response) => {
        try {
            const { orderID, productID, quantity, unitPrice } = req.body;
            if (!orderID || !productID || !quantity || !unitPrice) {
                return res.status(400).json({ message: 'Order ID, product ID, quantity, and unit price are required' });
            }
            const existingOrder = await Order.findByPk(orderID);
            if (!existingOrder) {
                return res.status(400).json({ message: 'Order not found' });
            }
            const existingProduct = await Product.findByPk(productID);
            if (!existingProduct) {
                return res.status(400).json({ message: 'Product not found' });
            }
            const orderDetail = await OrderDetail.create(req.body);
            res.status(201).json(orderDetail);
        } catch (error) {
            console.error('Error creating order detail:', error);
            res.status(500).json({ message: 'Failed to create order detail' });
        }
    }

    // Get all OrderDetails
    public static getAllOrderDetails = async (req: express.Request, res: express.Response) => {
        try {
            const orderDetails = await OrderDetail.findAll();
            res.status(200).json(orderDetails);
        } catch (error) {
            console.error('Error getting order details:', error);
            res.status(500).json({ message: 'Failed to get order details' });
        }
    }

    // Get OrderDetail by ID
    public static getOrderDetailById = async (req: express.Request, res: express.Response) => {
        try {
            const orderDetailId = parseInt(req.params.id);
            if (!orderDetailId) {
                return res.status(400).json({ message: 'Invalid order detail ID' });
            }
            const orderDetail = await OrderDetail.findByPk(orderDetailId);
            if (!orderDetail) {
                return res.status(404).json({ message: 'Order detail not found' });
            }
            res.status(200).json(orderDetail);
        } catch (error) {
            console.error('Error getting order detail by ID:', error);
            res.status(500).json({ message: 'Failed to get order detail' });
        }
    }

    // Update OrderDetail
    public static updateOrderDetail = async (req: express.Request, res: express.Response) => {
        try {
            const orderDetailId = parseInt(req.params.id);
            if (!orderDetailId) {
                return res.status(400).json({ message: 'Invalid order detail ID' });
            }
            const orderDetail = await OrderDetail.findByPk(orderDetailId);
            if (!orderDetail) {
                return res.status(404).json({ message: 'Order detail not found' });
            }
            await orderDetail.update(req.body);
            res.status(200).json(orderDetail);
        } catch (error) {
            console.error('Error updating order detail:', error);
            res.status(500).json({ message: 'Failed to update order detail' });
        }
    }

    // Delete OrderDetail
    public static deleteOrderDetail = async (req: express.Request, res: express.Response) => {
        try {
            const orderDetailId = parseInt(req.params.id);
            if (!orderDetailId) {
                return res.status(400).json({ message: 'Invalid order detail ID' });
            }
            const orderDetail = await OrderDetail.findByPk(orderDetailId);
            if (!orderDetail) {
                return res.status(404).json({ message: 'Order detail not found' });
            }
            await orderDetail.destroy();
            res.status(204).json({ message: 'Order detail deleted successfully' });
        } catch (error) {
            console.error('Error deleting order detail:', error);
            res.status(500).json({ message: 'Failed to delete order detail' });
        }
    }
}
