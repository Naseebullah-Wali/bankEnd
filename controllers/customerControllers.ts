import express from 'express';
import Customer from '../models/customers';

export class CustomerController {

    // Create Customer
    public static createCustomer = async (req: express.Request, res: express.Response) => {
        try {
            const { customerName, contactInfo } = req.body;
            if (!customerName || !contactInfo) {
                return res.status(400).json({ message: 'Customer name and contact info are required' });
            }
            const existingCustomer = await Customer.findOne({ where: { customerName } });
            if (existingCustomer) {
                return res.status(400).json({ message: 'Customer name already exists' });
            }
            const customer = await Customer.create(req.body);
            res.status(201).json(customer);
        } catch (error) {
            console.error('Error creating customer:', error);
            res.status(500).json({ message: 'Failed to create customer' });
        }
    }

    // Get all Customers
    public static getAllCustomers = async (req: express.Request, res: express.Response) => {
        try {
            const customers = await Customer.findAll();
            res.status(200).json(customers);
        } catch (error) {
            console.error('Error getting customers:', error);
            res.status(500).json({ message: 'Failed to get customers' });
        }
    }

    // Get Customer by ID
    public static getCustomerById = async (req: express.Request, res: express.Response) => {
        try {
            const customerId = parseInt(req.params.id);
            if (!customerId) {
                return res.status(400).json({ message: 'Invalid customer ID' });
            }
            const customer = await Customer.findByPk(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }
            res.status(200).json(customer);
        } catch (error) {
            console.error('Error getting customer by ID:', error);
            res.status(500).json({ message: 'Failed to get customer' });
        }
    }

    // Update Customer
    public static updateCustomer = async (req: express.Request, res: express.Response) => {
        try {
            const customerId = parseInt(req.params.id);
            if (!customerId) {
                return res.status(400).json({ message: 'Invalid customer ID' });
            }
            const customer = await Customer.findByPk(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }
            await customer.update(req.body);
            res.status(200).json(customer);
        } catch (error) {
            console.error('Error updating customer:', error);
            res.status(500).json({ message: 'Failed to update customer' });
        }
    }

    // Delete Customer
    public static deleteCustomer = async (req: express.Request, res: express.Response) => {
        try {
            const customerId = parseInt(req.params.id);
            if (!customerId) {
                return res.status(400).json({ message: 'Invalid customer ID' });
            }
            const customer = await Customer.findByPk(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }
            await customer.destroy();
            res.status(204).json({ message: 'Customer deleted successfully' });
        } catch (error) {
            console.error('Error deleting customer:', error);
            res.status(500).json({ message: 'Failed to delete customer' });
        }
    }
}
