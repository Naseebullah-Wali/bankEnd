import express from 'express';
import ProductWarehouse from '../models/productWarehouses';
import Product from '../models/Product';
import Warehouse from '../models/warehouses';

export class ProductWarehouseController {

    // Create ProductWarehouse
    public static createProductWarehouse = async (req: express.Request, res: express.Response) => {
        try {
            const { productID, warehouseID, quantity } = req.body;
            if (!productID || !warehouseID || !quantity) {
                return res.status(400).json({ message: 'Product ID, warehouse ID, and quantity are required' });
            }
            const existingProduct = await Product.findByPk(productID);
            if (!existingProduct) {
                return res.status(400).json({ message: 'Product not found' });
            }
            const existingWarehouse = await Warehouse.findByPk(warehouseID);
            if (!existingWarehouse) {
                return res.status(400).json({ message: 'Warehouse not found' });
            }
            const productWarehouse = await ProductWarehouse.create(req.body);
            res.status(201).json(productWarehouse);
        } catch (error) {
            console.error('Error creating product warehouse:', error);
            res.status(500).json({ message: 'Failed to create product warehouse' });
        }
    }

    // Get all ProductWarehouses
    public static getAllProductWarehouses = async (req: express.Request, res: express.Response) => {
        try {
            const productWarehouses = await ProductWarehouse.findAll();
            res.status(200).json(productWarehouses);
        } catch (error) {
            console.error('Error getting product warehouses:', error);
            res.status(500).json({ message: 'Failed to get product warehouses' });
        }
    }

    // Get ProductWarehouse by Product ID and Warehouse ID
    public static getProductWarehouseByIds = async (req: express.Request, res: express.Response) => {
        try {
            const { productID, warehouseID } = req.params;
            if (!productID || !warehouseID) {
                return res.status(400).json({ message: 'Product ID and warehouse ID are required' });
            }
            const productWarehouse = await ProductWarehouse.findOne({ where: { productID, warehouseID } });
            if (!productWarehouse) {
                return res.status(404).json({ message: 'Product warehouse not found' });
            }
            res.status(200).json(productWarehouse);
        } catch (error) {
            console.error('Error getting product warehouse by IDs:', error);
            res.status(500).json({ message: 'Failed to get product warehouse' });
        }
    }

    // Update ProductWarehouse
    public static updateProductWarehouse = async (req: express.Request, res: express.Response) => {
        try {
            const { productID, warehouseID } = req.params;
            if (!productID || !warehouseID) {
                return res.status(400).json({ message: 'Product ID and warehouse ID are required' });
            }
            const productWarehouse = await ProductWarehouse.findOne({ where: { productID, warehouseID } });
            if (!productWarehouse) {
                return res.status(404).json({ message: 'Product warehouse not found' });
            }
            await productWarehouse.update(req.body);
            res.status(200).json(productWarehouse);
        } catch (error) {
            console.error('Error updating product warehouse:', error);
            res.status(500).json({ message: 'Failed to update product warehouse' });
        }
    }

    // Delete ProductWarehouse
    public static deleteProductWarehouse = async (req: express.Request, res: express.Response) => {
        try {
            const { productID, warehouseID } = req.params;
            if (!productID || !warehouseID) {
                return res.status(400).json({ message: 'Product ID and warehouse ID are required' });
            }
            const productWarehouse = await ProductWarehouse.findOne({ where: { productID, warehouseID } });
            if (!productWarehouse) {
                return res.status(404).json({ message: 'Product warehouse not found' });
            }
            await productWarehouse.destroy();
            res.status(204).json({ message: 'Product warehouse deleted successfully' });
        } catch (error) {
            console.error('Error deleting product warehouse:', error);
            res.status(500).json({ message: 'Failed to delete product warehouse' });
        }
    }
}
