import express from 'express';
import Product from '../models/Product';

export class ProductController {
    
    // Create Product
    public static createProduct = async (req: express.Request, res: express.Response) => {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            console.error('Error creating product:', error);
            res.status(500).json({ message: 'Failed to create product' });
        }
    }

    // Get all Products
    public static getAllProducts = async (req: express.Request, res: express.Response) => {
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            console.error('Error getting products:', error);
            res.status(500).json({ message: 'Failed to get products' });
        }
    }

    // Get Product by ID
    public static getProductById = async (req: express.Request, res: express.Response) => {
        try {
            const productId = parseInt(req.params.id);
            const product = await Product.findByPk(productId);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json(product);
        } catch (error) {
            console.error('Error getting product by ID:', error);
            res.status(500).json({ message: 'Failed to get product' });
        }
    }

    // Update Product
    public static updateProduct = async (req: express.Request, res: express.Response) => {
        try {
            const productId = parseInt(req.params.id);
            const product = await Product.findByPk(productId);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            await product.update(req.body);
            res.status(200).json(product);
        } catch (error) {
            console.error('Error updating product:', error);
            res.status(500).json({ message: 'Failed to update product' });
        }
    }

    // Delete Product
    public static deleteProduct = async (req: express.Request, res: express.Response) => {
        try {
            const productId = parseInt(req.params.id);
            const product = await Product.findByPk(productId);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            await product.destroy();
            res.status(204).json({ message: 'Product deleted successfully' });
        } catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ message: 'Failed to delete product' });
        }
    }
}
