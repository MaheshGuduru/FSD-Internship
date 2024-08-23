// routes/foodItemRoutes.js
const express = require('express');
const {
    createFoodItem,
    getAllFoodItems,
    getFoodItemById,
    updateFoodItem,
    deleteFoodItem
} = require('../controllers/foodItemController');

const router = express.Router();

router.post('/fooditems', createFoodItem);
router.get('/fooditems', getAllFoodItems);
router.get('/fooditems/:id', getFoodItemById);
router.put('/fooditems/:id', updateFoodItem);
router.delete('/fooditems/:id', deleteFoodItem);

module.exports = router;
