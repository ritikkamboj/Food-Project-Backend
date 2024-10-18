//Create Resturent
const { create } = require("../models/userModel");
const resturentModel = require("./../models/resturentModel");
const createResturentController = async (req, res) => {
    try {
        const {
            title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coords,
        } = req.body;

        if (!title || !coords) {
            return res.status(500).send({
                success: false,
                message: "please Provide title and address(coords)",
            });
        }

        const newResturent = await resturentModel.create({
            title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coords,
        });
        await newResturent.save();

        res.status(201).send({
            success: true,
            message: "Resturent created Successfully",
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "error in creating resturent API",
            err,
        });
    }
};

module.exports = { createResturentController };
