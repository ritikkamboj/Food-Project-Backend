const express = require('express');
const testController = require('./../controllers/testController')

const router = express.Router();

router.get('/test-data', testController)


module.exports = router