import express from "express";
import { EmployeeController } from "../controllers/employeeControllers";

const employeeRouter: express.Router = express.Router();

// Create a new employee
employeeRouter.post('/employees', EmployeeController.createEmployee);

// Get all employees
employeeRouter.get('/employees', EmployeeController.getAllEmployees);

// Get an employee by ID
employeeRouter.get('/employees/:id', EmployeeController.getEmployeeById);

// Update an employee by ID
employeeRouter.put('/employees/:id', EmployeeController.updateEmployee);

// Delete an employee by ID
employeeRouter.delete('/employees/:id', EmployeeController.deleteEmployee);

export default employeeRouter;
