const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { categoryCreateController } = require('../controllers/categoryController');

const route = express.Router();

route.post('/catCreate', authMiddleware, categoryCreateController)


module.exports = route;