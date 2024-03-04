import express from 'express';
import Category from '../models/Categories';

export class CategoryController {

    // Create Category
    public static createCategory = async (req: express.Request, res: express.Response) => {
        try {
            const { categoryName, description, imageURL } = req.body;
            if (!categoryName) {
                return res.status(400).json({ message: 'Category name is required' });
            }
            const existingCategory = await Category.findOne({ where: { categoryName } });
            if (existingCategory) {
                return res.status(400).json({ message: 'Category name already exists' });
            }
            const category = await Category.create(req.body);
            res.status(201).json(category);
        } catch (error) {
            console.error('Error creating category:', error);
            res.status(500).json({ message: 'Failed to create category' });
        }
    }

    // Get all Categories
    public static getAllCategories = async (req: express.Request, res: express.Response) => {
        try {
            const categories = await Category.findAll();
            res.status(200).json(categories);
        } catch (error) {
            console.error('Error getting categories:', error);
            res.status(500).json({ message: 'Failed to get categories' });
        }
    }

    // Get Category by ID
    public static getCategoryById = async (req: express.Request, res: express.Response) => {
        try {
            const categoryId = parseInt(req.params.id);
            const category = await Category.findByPk(categoryId);
            if (!category) {
                res.status(404).json({ message: 'Category not found' });
                return;
            }
            res.status(200).json(category);
        } catch (error) {
            console.error('Error getting category by ID:', error);
            res.status(500).json({ message: 'Failed to get category' });
        }
    }

    // Update Category
    public static updateCategory = async (req: express.Request, res: express.Response) => {
        try {
            const categoryId = parseInt(req.params.id);
            const { categoryName, description, imageURL } = req.body;
            const category = await Category.findByPk(categoryId);
            if (!category) {
                res.status(404).json({ message: 'Category not found' });
                return;
            }
            if (!categoryName) {
                return res.status(400).json({ message: 'Category name is required' });
            }
            const existingCategory = await Category.findOne({ where: { categoryName } });
            if (existingCategory && existingCategory.id !== categoryId) {
                return res.status(400).json({ message: 'Category name already exists' });
            }
            await category.update({ categoryName, description, imageURL });
            res.status(200).json(category);
        } catch (error) {
            console.error('Error updating category:', error);
            res.status(500).json({ message: 'Failed to update category' });
        }
    }

    // Delete Category
    public static deleteCategory = async (req: express.Request, res: express.Response) => {
        try {
            const categoryId = parseInt(req.params.id);
            const category = await Category.findByPk(categoryId);
            if (!category) {
                res.status(404).json({ message: 'Category not found' });
                return;
            }
            await category.destroy();
            res.status(204).json({ message: 'Category deleted successfully' });
        } catch (error) {
            console.error('Error deleting category:', error);
            res.status(500).json({ message: 'Failed to delete category' });
        }
    }
}
