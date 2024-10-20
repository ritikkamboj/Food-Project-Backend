const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createFoodController } = require('../controllers/foodController');

const route = express.Router();

route.post('/createFood', authMiddleware, createFoodController);

module.exports = route;