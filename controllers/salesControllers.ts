import express from 'express';
import Sale from '../models/sales';
import Customer from '../models/customers';
import Employee from '../models/employees';

export class SaleController {

    // Create Sale
    public static createSale = async (req: express.Request, res: express.Response) => {
        try {
            const { customerID, employeeID, saleDate, totalAmount } = req.body;
            if (!customerID || !employeeID || !saleDate || !totalAmount) {
                return res.status(400).json({ message: 'Customer ID, employee ID, sale date, and total amount are required' });
            }
            const existingCustomer = await Customer.findByPk(customerID);
            if (!existingCustomer) {
                return res.status(400).json({ message: 'Customer not found' });
            }
            const existingEmployee = await Employee.findByPk(employeeID);
            if (!existingEmployee) {
                return res.status(400).json({ message: 'Employee not found' });
            }
            const sale = await Sale.create(req.body);
            res.status(201).json(sale);
        } catch (error) {
            console.error('Error creating sale:', error);
            res.status(500).json({ message: 'Failed to create sale' });
        }
    }

    // Get all Sales
    public static getAllSales = async (req: express.Request, res: express.Response) => {
        try {
            const sales = await Sale.findAll();
            res.status(200).json(sales);
        } catch (error) {
            console.error('Error getting sales:', error);
            res.status(500).json({ message: 'Failed to get sales' });
        }
    }

    // Get Sale by ID
    public static getSaleById = async (req: express.Request, res: express.Response) => {
        try {
            const saleId = parseInt(req.params.id);
            if (!saleId) {
                return res.status(400).json({ message: 'Invalid sale ID' });
            }
            const sale = await Sale.findByPk(saleId);
            if (!sale) {
                return res.status(404).json({ message: 'Sale not found' });
            }
            res.status(200).json(sale);
        } catch (error) {
            console.error('Error getting sale by ID:', error);
            res.status(500).json({ message: 'Failed to get sale' });
        }
    }

    // Update Sale
    public static updateSale = async (req: express.Request, res: express.Response) => {
        try {
            const saleId = parseInt(req.params.id);
            if (!saleId) {
                return res.status(400).json({ message: 'Invalid sale ID' });
            }
            const sale = await Sale.findByPk(saleId);
            if (!sale) {
                return res.status(404).json({ message: 'Sale not found' });
            }
            await sale.update(req.body);
            res.status(200).json(sale);
        } catch (error) {
            console.error('Error updating sale:', error);
            res.status(500).json({ message: 'Failed to update sale' });
        }
    }

    // Delete Sale
    public static deleteSale = async (req: express.Request, res: express.Response) => {
        try {
            const saleId = parseInt(req.params.id);
            if (!saleId) {
                return res.status(400).json({ message: 'Invalid sale ID' });
            }
            const sale = await Sale.findByPk(saleId);
            if (!sale) {
                return res.status(404).json({ message: 'Sale not found' });
            }
            await sale.destroy();
            res.status(204).json({ message: 'Sale deleted successfully' });
        } catch (error) {
            console.error('Error deleting sale:', error);
            res.status(500).json({ message: 'Failed to delete sale' });
        }
    }
}
