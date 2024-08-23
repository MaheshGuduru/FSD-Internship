// models/FoodItem.js
const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    foodGroup: { type: String, required: true },
    description: String,
    nutritionalInfo: {
        calories: Number,
        macronutrients: {
            proteins: Number,
            fats: Number,
            carbohydrates: Number,
            sugars: Number,
        },
        micronutrients: {
            vitamins: Map,
            minerals: Map,
        },
        fiber: Number,
        sodium: Number,
        cholesterol: Number,
    },
    servingSize: String,
    allergens: [String],
    ingredients: [String],
    preparationMethods: [String],
    certifications: [String],
    countryOfOrigin: String,
    brand: String,
    dietaryRestrictions: [String],
    healthBenefits: [String],
    bestPractices: [String],
}, { timestamps: true });

const FoodItem = mongoose.model('FoodItem', foodItemSchema);
module.exports = FoodItem;
