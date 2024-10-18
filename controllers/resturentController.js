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

const getAllResturentController = async (req, res) => {
    try {
        const resturentAll = await resturentModel.find({});
        if (!resturentAll) {
            return res.status(500).send({
                success: false,
                message: "No Resturent found "
            })
        }
        res.status(201).send({
            success: true,
            message: "Resturents fetched Successfully ",
            resturentAll
        })

    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: "There is some error in get all resturent API",
            err
        })

    }

}

const getResturent = async (req, res) => {
    try {
        const resturentId = req.params.id;
        if (!resturentId) {
            return res.status(500).send({
                success: false,
                message: "ResturentId not found"
            })
        }

        const resturent = await resturentModel.findById(resturentId);
        if (!resturent) {
            return res.status(500).send({
                success: false,
                message: "Resturent not found for specific Id "
            })
        }

        res.status(200).send({
            success: true,
            message: "Resturent found sucessfully",
            resturent
        })

    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: "get Resturent by id API not working "
        })
    }

}
module.exports = { createResturentController, getAllResturentController, getResturent };
