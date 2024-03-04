import express from 'express';
import Supplier from '../models/suppliers';

export class SupplierController {

    // Create Supplier
    public static createSupplier = async (req: express.Request, res: express.Response) => {
        try {
            const { supplierName, contactInfo } = req.body;
            if (!supplierName || !contactInfo) {
                return res.status(400).json({ message: 'Supplier name and contact info are required' });
            }
            const existingSupplier = await Supplier.findOne({ where: { supplierName } });
            if (existingSupplier) {
                return res.status(400).json({ message: 'Supplier name already exists' });
            }
            const supplier = await Supplier.create(req.body);
            res.status(201).json(supplier);
        } catch (error) {
            console.error('Error creating supplier:', error);
            res.status(500).json({ message: 'Failed to create supplier' });
        }
    }

    // Get all Suppliers
    public static getAllSuppliers = async (req: express.Request, res: express.Response) => {
        try {
            const suppliers = await Supplier.findAll();
            res.status(200).json(suppliers);
        } catch (error) {
            console.error('Error getting suppliers:', error);
            res.status(500).json({ message: 'Failed to get suppliers' });
        }
    }

    // Get Supplier by ID
    public static getSupplierById = async (req: express.Request, res: express.Response) => {
        try {
            const supplierId = parseInt(req.params.id);
            if (!supplierId) {
                return res.status(400).json({ message: 'Invalid supplier ID' });
            }
            const supplier = await Supplier.findByPk(supplierId);
            if (!supplier) {
                return res.status(404).json({ message: 'Supplier not found' });
            }
            res.status(200).json(supplier);
        } catch (error) {
            console.error('Error getting supplier by ID:', error);
            res.status(500).json({ message: 'Failed to get supplier' });
        }
    }

    // Update Supplier
    public static updateSupplier = async (req: express.Request, res: express.Response) => {
        try {
            const supplierId = parseInt(req.params.id);
            if (!supplierId) {
                return res.status(400).json({ message: 'Invalid supplier ID' });
            }
            const supplier = await Supplier.findByPk(supplierId);
            if (!supplier) {
                return res.status(404).json({ message: 'Supplier not found' });
            }
            await supplier.update(req.body);
            res.status(200).json(supplier);
        } catch (error) {
            console.error('Error updating supplier:', error);
            res.status(500).json({ message: 'Failed to update supplier' });
        }
    }

    // Delete Supplier
    public static deleteSupplier = async (req: express.Request, res: express.Response) => {
        try {
            const supplierId = parseInt(req.params.id);
            if (!supplierId) {
                return res.status(400).json({ message: 'Invalid supplier ID' });
            }
            const supplier = await Supplier.findByPk(supplierId);
            if (!supplier) {
                return res.status(404).json({ message: 'Supplier not found' });
            }
            await supplier.destroy();
            res.status(204).json({ message: 'Supplier deleted successfully' });
        } catch (error) {
            console.error('Error deleting supplier:', error);
            res.status(500).json({ message: 'Failed to delete supplier' });
        }
    }
}
