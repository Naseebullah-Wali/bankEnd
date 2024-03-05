import express from "express";
import { CustomerController } from "../controllers/customerControllers";

const customerRouter: express.Router = express.Router();

// Create a new customer
customerRouter.post('/customers', CustomerController.createCustomer);

// Get all customers
customerRouter.get('/customers', CustomerController.getAllCustomers);

// Get a customer by ID
customerRouter.get('/customers/:id', CustomerController.getCustomerById);

// Update a customer by ID
customerRouter.put('/customers/:id', CustomerController.updateCustomer);

// Delete a customer by ID
customerRouter.delete('/customers/:id', CustomerController.deleteCustomer);

export default customerRouter;
