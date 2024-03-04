import express from 'express';
import Warehouse from '../models/warehouses';

export class WarehouseController {

    // Create Warehouse
    public static createWarehouse = async (req: express.Request, res: express.Response) => {
        try {
            const { warehouseName, location } = req.body;
            if (!warehouseName || !location) {
                return res.status(400).json({ message: 'Warehouse name and location are required' });
            }
            const existingWarehouse = await Warehouse.findOne({ where: { warehouseName } });
            if (existingWarehouse) {
                return res.status(400).json({ message: 'Warehouse name already exists' });
            }
            const warehouse = await Warehouse.create(req.body);
            res.status(201).json(warehouse);
        } catch (error) {
            console.error('Error creating warehouse:', error);
            res.status(500).json({ message: 'Failed to create warehouse' });
        }
    }

    // Get all Warehouses
    public static getAllWarehouses = async (req: express.Request, res: express.Response) => {
        try {
            const warehouses = await Warehouse.findAll();
            res.status(200).json(warehouses);
        } catch (error) {
            console.error('Error getting warehouses:', error);
            res.status(500).json({ message: 'Failed to get warehouses' });
        }
    }

    // Get Warehouse by ID
    public static getWarehouseById = async (req: express.Request, res: express.Response) => {
        try {
            const warehouseId = parseInt(req.params.id);
            if (!warehouseId) {
                return res.status(400).json({ message: 'Invalid warehouse ID' });
            }
            const warehouse = await Warehouse.findByPk(warehouseId);
            if (!warehouse) {
                return res.status(404).json({ message: 'Warehouse not found' });
            }
            res.status(200).json(warehouse);
        } catch (error) {
            console.error('Error getting warehouse by ID:', error);
            res.status(500).json({ message: 'Failed to get warehouse' });
        }
    }

    // Update Warehouse
    public static updateWarehouse = async (req: express.Request, res: express.Response) => {
        try {
            const warehouseId = parseInt(req.params.id);
            if (!warehouseId) {
                return res.status(400).json({ message: 'Invalid warehouse ID' });
            }
            const warehouse = await Warehouse.findByPk(warehouseId);
            if (!warehouse) {
                return res.status(404).json({ message: 'Warehouse not found' });
            }
            await warehouse.update(req.body);
            res.status(200).json(warehouse);
        } catch (error) {
            console.error('Error updating warehouse:', error);
            res.status(500).json({ message: 'Failed to update warehouse' });
        }
    }

    // Delete Warehouse
    public static deleteWarehouse = async (req: express.Request, res: express.Response) => {
        try {
            const warehouseId = parseInt(req.params.id);
            if (!warehouseId) {
                return res.status(400).json({ message: 'Invalid warehouse ID' });
            }
            const warehouse = await Warehouse.findByPk(warehouseId);
            if (!warehouse) {
                return res.status(404).json({ message: 'Warehouse not found' });
            }
            await warehouse.destroy();
            res.status(204).json({ message: 'Warehouse deleted successfully' });
        } catch (error) {
            console.error('Error deleting warehouse:', error);
            res.status(500).json({ message: 'Failed to delete warehouse' });
        }
    }
}
