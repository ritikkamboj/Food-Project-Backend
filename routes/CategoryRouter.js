const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { categoryCreateController, getAllCategoriesController, updateCategoriesController, deleteCategoryController } = require('../controllers/categoryController');

const route = express.Router();

route.post('/catCreate', authMiddleware, categoryCreateController);
route.get('/getAllCategories', getAllCategoriesController);
route.put('/updateCategories/:id', authMiddleware, updateCategoriesController)
route.delete('/deleteCategory/:id', authMiddleware, deleteCategoryController)


module.exports = route;