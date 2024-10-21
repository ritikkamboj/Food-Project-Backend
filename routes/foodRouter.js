const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createFoodController, getAllFoodController, getFoodController, getFoodByResturentController } = require('../controllers/foodController');

const route = express.Router();

route.post('/createFood', authMiddleware, createFoodController);

route.get('/getAllFoods', getAllFoodController);
route.get('/getFood/:id', authMiddleware, getFoodController)
route.get('/getFoodByResturent/:id', getFoodByResturentController)

module.exports = route;