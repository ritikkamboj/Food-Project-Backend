const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { categoryCreateController, getAllCategoriesController, updateCategoriesController } = require('../controllers/categoryController');

const route = express.Router();

route.post('/catCreate', authMiddleware, categoryCreateController);
route.get('/getAllCategories', getAllCategoriesController);
route.put('/updateCategories/:id', authMiddleware, updateCategoriesController)


module.exports = route;