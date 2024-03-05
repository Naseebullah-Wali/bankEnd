import express from "express";
import { ProductController } from "../controllers/productsControllers";

const productRouter: express.Router = express.Router();

// Create a new product
productRouter.post('/products', ProductController.createProduct);

// Get all products
productRouter.get('/products', ProductController.getAllProducts);

// Get a product by ID
productRouter.get('/products/:id', ProductController.getProductById);

// Update a product by ID
productRouter.put('/products/:id', ProductController.updateProduct);

// Delete a product by ID
productRouter.delete('/products/:id', ProductController.deleteProduct);

export default productRouter;
