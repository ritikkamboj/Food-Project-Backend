const express = require('express');
const { getUserController } = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const route = express.Router();

//router
// getuser || get
route.get('/getUser', authMiddleware, getUserController)


module.exports = route;