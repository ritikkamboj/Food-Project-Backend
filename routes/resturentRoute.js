const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createResturentController, getAllResturentController, getResturent } = require('../controllers/resturentController');

const route = express.Router();


//Router 
//Create Resturent || POST

route.post('/create', authMiddleware, createResturentController);
// get all resturent details 

route.get('/getAllResturent', authMiddleware, getAllResturentController);

//get resturent by id 

route.get('/getResturent/:id', authMiddleware, getResturent);

module.exports = route;