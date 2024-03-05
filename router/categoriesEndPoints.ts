import express from "express";
import { CategoryController } from "../controllers/categoriesControllers";

const categoryRouter: express.Router = express.Router();

// Create a new category
categoryRouter.post('/categories', CategoryController.createCategory);

// Get all categories
categoryRouter.get('/categories', CategoryController.getAllCategories);

// Get a category by ID
categoryRouter.get('/categories/:id', CategoryController.getCategoryById);

// Update a category by ID
categoryRouter.put('/categories/:id', CategoryController.updateCategory);

// Delete a category by ID
categoryRouter.delete('/categories/:id', CategoryController.deleteCategory);

export default categoryRouter;
