import express from 'express';
import Employee from '../models/employees';

export class EmployeeController {

    // Create Employee
    public static createEmployee = async (req: express.Request, res: express.Response) => {
        try {
            const { employeeName, role, salary } = req.body;
            if (!employeeName || !role || !salary) {
                return res.status(400).json({ message: 'Employee name, role, and salary are required' });
            }
            const existingEmployee = await Employee.findOne({ where: { employeeName } });
            if (existingEmployee) {
                return res.status(400).json({ message: 'Employee name already exists' });
            }
            const employee = await Employee.create(req.body);
            res.status(201).json(employee);
        } catch (error) {
            console.error('Error creating employee:', error);
            res.status(500).json({ message: 'Failed to create employee' });
        }
    }

    // Get all Employees
    public static getAllEmployees = async (req: express.Request, res: express.Response) => {
        try {
            const employees = await Employee.findAll();
            res.status(200).json(employees);
        } catch (error) {
            console.error('Error getting employees:', error);
            res.status(500).json({ message: 'Failed to get employees' });
        }
    }

    // Get Employee by ID
    public static getEmployeeById = async (req: express.Request, res: express.Response) => {
        try {
            const employeeId = parseInt(req.params.id);
            if (!employeeId) {
                return res.status(400).json({ message: 'Invalid employee ID' });
            }
            const employee = await Employee.findByPk(employeeId);
            if (!employee) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            res.status(200).json(employee);
        } catch (error) {
            console.error('Error getting employee by ID:', error);
            res.status(500).json({ message: 'Failed to get employee' });
        }
    }

    // Update Employee
    public static updateEmployee = async (req: express.Request, res: express.Response) => {
        try {
            const employeeId = parseInt(req.params.id);
            if (!employeeId) {
                return res.status(400).json({ message: 'Invalid employee ID' });
            }
            const employee = await Employee.findByPk(employeeId);
            if (!employee) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            await employee.update(req.body);
            res.status(200).json(employee);
        } catch (error) {
            console.error('Error updating employee:', error);
            res.status(500).json({ message: 'Failed to update employee' });
        }
    }

    // Delete Employee
    public static deleteEmployee = async (req: express.Request, res: express.Response) => {
        try {
            const employeeId = parseInt(req.params.id);
            if (!employeeId) {
                return res.status(400).json({ message: 'Invalid employee ID' });
            }
            const employee = await Employee.findByPk(employeeId);
            if (!employee) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            await employee.destroy();
            res.status(204).json({ message: 'Employee deleted successfully' });
        } catch (error) {
            console.error('Error deleting employee:', error);
            res.status(500).json({ message: 'Failed to delete employee' });
        }
    }
}
