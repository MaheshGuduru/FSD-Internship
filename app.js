// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const foodItemRoutes = require('./routes/foodItemRoutes');
const FoodItem = require('./models/FoodItem'); // Import the FoodItem model

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json()); // Parse JSON bodies for this app
app.use('/api', foodItemRoutes); // Use the food item routes for API
app.use(express.static('public')); // Serve static files from the "public" directory

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route to display food items as cards
app.get('/foods', async (req, res) => {
    try {
        const foodItems = await FoodItem.find();
        res.render('foods', { foodItems });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Seed route to add 20 sample food items to the database
app.get('/seed', async (req, res) => {
    try {
        const foodItems = [
            {
                name: "Apple",
                foodGroup: "Fruits",
                description: "A sweet, edible fruit produced by an apple tree.",
                nutritionalInfo: {
                    calories: 52,
                    macronutrients: {
                        proteins: 0.3,
                        fats: 0.2,
                        carbohydrates: 14,
                        sugars: 10
                    },
                    micronutrients: {
                        vitamins: { "Vitamin C": "5 mg" },
                        minerals: { "Potassium": "107 mg" }
                    },
                    fiber: 2.4,
                    sodium: 1,
                    cholesterol: 0
                },
                servingSize: "1 medium apple",
                allergens: [],
                ingredients: ["Apple"],
                preparationMethods: ["Wash and eat raw or cook as desired"],
                certifications: ["Organic"],
                countryOfOrigin: "USA",
                brand: "Nature's Best",
                dietaryRestrictions: ["Vegan", "Gluten-Free"],
                healthBenefits: ["Rich in fiber", "Good for heart health"],
                bestPractices: ["Store in a cool, dry place"]
            },
            {
                name: "Banana",
                foodGroup: "Fruits",
                description: "A long, edible fruit produced by several kinds of large herbaceous flowering plants.",
                nutritionalInfo: {
                    calories: 89,
                    macronutrients: {
                        proteins: 1.1,
                        fats: 0.3,
                        carbohydrates: 23,
                        sugars: 12
                    },
                    micronutrients: {
                        vitamins: { "Vitamin B6": "0.5 mg" },
                        minerals: { "Potassium": "358 mg" }
                    },
                    fiber: 2.6,
                    sodium: 1,
                    cholesterol: 0
                },
                servingSize: "1 medium banana",
                allergens: [],
                ingredients: ["Banana"],
                preparationMethods: ["Peel and eat raw or cook as desired"],
                certifications: ["Fair Trade"],
                countryOfOrigin: "Ecuador",
                brand: "Tropical Delight",
                dietaryRestrictions: ["Vegan", "Gluten-Free"],
                healthBenefits: ["Rich in potassium", "Good for digestion"],
                bestPractices: ["Store at room temperature"]
            },
            // Add 18 more food items here with similar structure
        ];

        await FoodItem.insertMany(foodItems);
        res.status(201).json({ message: '20 sample food items added to the database' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
