const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createFoodController, getAllFoodController, getFoodController, getFoodByResturentController, updateFoodController, deleteFoodController, placeOrderController } = require('../controllers/foodController');

const route = express.Router();

route.post('/createFood', authMiddleware, createFoodController);

route.get('/getAllFoods', getAllFoodController);
route.get('/getFood/:id', authMiddleware, getFoodController)
route.get('/getFoodByResturent/:id', getFoodByResturentController)
route.put('/updateFood/:id', authMiddleware, updateFoodController)
route.delete('/deleteFood/:id', authMiddleware, deleteFoodController)


//place Order

route.post('/placeOrder', authMiddleware, placeOrderController)
module.exports = route;