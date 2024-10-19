const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { categoryCreateController, getAllCategoriesController } = require('../controllers/categoryController');

const route = express.Router();

route.post('/catCreate', authMiddleware, categoryCreateController);
route.get('/getAllCategories', getAllCategoriesController);


module.exports = route;