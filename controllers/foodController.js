const foodModel = require("../models/foodModel");

const createFoodController = async (req, res) => {
    try {
        const {
            title,
            foodTags,
            category,
            code,
            isAvailaible,
            resturent,
            rating,
            ratingCount,
            description,
            price,
            imageUrl,
        } = req.body;

        if (!title || !description || !price) {
            return res.status(500).send({
                success: false,
                message: " Please enter the required details  ",
            });
        }

        const createdFood = await foodModel.create({
            title,
            foodTags,
            category,
            code,
            isAvailaible,
            resturent,
            rating,
            ratingCount,
            description,
            price,
            imageUrl,
        });
        await createdFood.save();
        res.status(201).send({
            success: true,
            message: "food Created successfully ",
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "create food Api not working ",
        });
    }
};

module.exports = { createFoodController };
