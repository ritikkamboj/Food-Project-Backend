const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
    createResturentController,
    getAllResturentController,
    getResturent,
    deleteResturentController,
} = require("../controllers/resturentController");

const route = express.Router();

//Router
//Create Resturent || POST

route.post("/create", authMiddleware, createResturentController);
// get all resturent details

route.get("/getAllResturent", authMiddleware, getAllResturentController);

//get resturent by id

route.get("/getResturent/:id", authMiddleware, getResturent);

//delete resturent by ID

route.delete("/deleteResturent/:id", authMiddleware, deleteResturentController);

module.exports = route;
