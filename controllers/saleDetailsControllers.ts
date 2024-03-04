import express from 'express';
import SaleDetail from '../models/salesDetails';
import Sale from '../models/sales';
import Product from '../models/Product';

export class SaleDetailController {

    // Create Sale Detail
    public static createSaleDetail = async (req: express.Request, res: express.Response) => {
        try {
            const { saleID, productID, quantity, unitPrice } = req.body;
            if (!saleID || !productID || !quantity || !unitPrice) {
                return res.status(400).json({ message: 'Sale ID, product ID, quantity, and unit price are required' });
            }
            const existingSale = await Sale.findByPk(saleID);
            if (!existingSale) {
                return res.status(400).json({ message: 'Sale not found' });
            }
            const existingProduct = await Product.findByPk(productID);
            if (!existingProduct) {
                return res.status(400).json({ message: 'Product not found' });
            }
            const saleDetail = await SaleDetail.create(req.body);
            res.status(201).json(saleDetail);
        } catch (error) {
            console.error('Error creating sale detail:', error);
            res.status(500).json({ message: 'Failed to create sale detail' });
        }
    }

    // Get all Sale Details
    public static getAllSaleDetails = async (req: express.Request, res: express.Response) => {
        try {
            const saleDetails = await SaleDetail.findAll();
            res.status(200).json(saleDetails);
        } catch (error) {
            console.error('Error getting sale details:', error);
            res.status(500).json({ message: 'Failed to get sale details' });
        }
    }

    // Get Sale Detail by ID
    public static getSaleDetailById = async (req: express.Request, res: express.Response) => {
        try {
            const saleDetailId = parseInt(req.params.id);
            if (!saleDetailId) {
                return res.status(400).json({ message: 'Invalid sale detail ID' });
            }
            const saleDetail = await SaleDetail.findByPk(saleDetailId);
            if (!saleDetail) {
                return res.status(404).json({ message: 'Sale detail not found' });
            }
            res.status(200).json(saleDetail);
        } catch (error) {
            console.error('Error getting sale detail by ID:', error);
            res.status(500).json({ message: 'Failed to get sale detail' });
        }
    }

    // Update Sale Detail
    public static updateSaleDetail = async (req: express.Request, res: express.Response) => {
        try {
            const saleDetailId = parseInt(req.params.id);
            if (!saleDetailId) {
                return res.status(400).json({ message: 'Invalid sale detail ID' });
            }
            const saleDetail = await SaleDetail.findByPk(saleDetailId);
            if (!saleDetail) {
                return res.status(404).json({ message: 'Sale detail not found' });
            }
            await saleDetail.update(req.body);
            res.status(200).json(saleDetail);
        } catch (error) {
            console.error('Error updating sale detail:', error);
            res.status(500).json({ message: 'Failed to update sale detail' });
        }
    }

    // Delete Sale Detail
    public static deleteSaleDetail = async (req: express.Request, res: express.Response) => {
        try {
            const saleDetailId = parseInt(req.params.id);
            if (!saleDetailId) {
                return res.status(400).json({ message: 'Invalid sale detail ID' });
            }
            const saleDetail = await SaleDetail.findByPk(saleDetailId);
            if (!saleDetail) {
                return res.status(404).json({ message: 'Sale detail not found' });
            }
            await saleDetail.destroy();
            res.status(204).json({ message: 'Sale detail deleted successfully' });
        } catch (error) {
            console.error('Error deleting sale detail:', error);
            res.status(500).json({ message: 'Failed to delete sale detail' });
        }
    }
}
