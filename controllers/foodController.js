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


const getAllFoodController = async (req, res) => {
    try {
        const allFood = await foodModel.find();
        if (!allFood) {
            return res.status(500).send({
                success: false,
                message: "No food items availaible "
            })
        }

        res.status(200).send({
            success: true,
            message: "Results gets Successfully ",
            totalFoods: allFood.length,
            allFood

        })

    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: "There is some error in get all food Api "
        })

    }
}

const getFoodController = async (req, res) => {
    try {
        const foodId = req.params.id;
        if (!foodId) {
            return res.status(500).send({
                success: false,
                message: "There is no foodId found "
            })

        }
        const food = await foodModel.findById(foodId);
        if (!food) {
            return res.status(500).send({
                success: false,
                message: "There is no foodId found "
            })
        }

        res.status(200).send({
            success: true,
            message: "Food gets Successfully ",
            food
        })
    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: "There is some error in get food Api "
        })


    }

}

const getFoodByResturentController = async (req, res) => {

    try {
        const resturentId = req.params.id;
        if (!resturentId) {
            return res.status(500).send({
                success: false,
                message: "There is no foodId found "
            })

        }
        const food = await foodModel.find({ resturent: resturentId });
        if (!food) {
            return res.status(500).send({
                success: false,
                message: "There is no food found "
            })
        }

        res.status(200).send({
            success: true,
            message: "Food gets Successfully ",
            foodItems: food.length,
            food
        })
    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: "There is some error in get food Api by Resturent "
        })


    }


}
module.exports = { createFoodController, getAllFoodController, getFoodController, getFoodByResturentController };
