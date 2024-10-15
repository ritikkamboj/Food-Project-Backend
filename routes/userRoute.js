const express = require('express');
const { getUserController, updateUserController, updatePasswordController } = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const route = express.Router();

//router
// getuser || get
route.get('/getUser', authMiddleware, getUserController)
route.put('/updateUser', authMiddleware, updateUserController);
route.post('/updatePassword', authMiddleware, updatePasswordController)

module.exports = route;