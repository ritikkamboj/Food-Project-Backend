const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createResturentController } = require('../controllers/resturentController');

const route = express.Router();


//Router 
//Create Resturent || POST

route.post('/create', authMiddleware, createResturentController)

module.exports = route;