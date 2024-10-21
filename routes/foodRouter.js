const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createFoodController, getAllFoodController } = require('../controllers/foodController');

const route = express.Router();

route.post('/createFood', authMiddleware, createFoodController);

route.get('/getAllFoods', getAllFoodController);

module.exports = route;