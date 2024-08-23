// controllers/foodItemController.js
const FoodItem = require('../models/FoodItem');

// Create a new food item
exports.createFoodItem = async (req, res) => {
    try {
        const foodItem = new FoodItem(req.body);
        await foodItem.save();
        res.status(201).json(foodItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all food items
exports.getAllFoodItems = async (req, res) => {
    try {
        const foodItems = await FoodItem.find();
        res.status(200).json(foodItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific food item by ID
exports.getFoodItemById = async (req, res) => {
    try {
        const foodItem = await FoodItem.findById(req.params.id);
        if (!foodItem) return res.status(404).json({ message: 'Food item not found' });
        res.status(200).json(foodItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a food item by ID
exports.updateFoodItem = async (req, res) => {
    try {
        const foodItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!foodItem) return res.status(404).json({ message: 'Food item not found' });
        res.status(200).json(foodItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a food item by ID
exports.deleteFoodItem = async (req, res) => {
    try {
        const foodItem = await FoodItem.findByIdAndDelete(req.params.id);
        if (!foodItem) return res.status(404).json({ message: 'Food item not found' });
        res.status(204).json({ message: 'Food item deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
