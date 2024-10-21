const foodModel = require("../models/foodModel");
const orderModel = require("../models/orderMOdel");

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
                message: "No food items availaible ",
            });
        }

        res.status(200).send({
            success: true,
            message: "Results gets Successfully ",
            totalFoods: allFood.length,
            allFood,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "There is some error in get all food Api ",
        });
    }
};

const getFoodController = async (req, res) => {
    try {
        const foodId = req.params.id;
        if (!foodId) {
            return res.status(500).send({
                success: false,
                message: "There is no foodId found ",
            });
        }
        const food = await foodModel.findById(foodId);
        if (!food) {
            return res.status(500).send({
                success: false,
                message: "There is no foodId found ",
            });
        }

        res.status(200).send({
            success: true,
            message: "Food gets Successfully ",
            food,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "There is some error in get food Api ",
        });
    }
};

const getFoodByResturentController = async (req, res) => {
    try {
        const resturentId = req.params.id;
        if (!resturentId) {
            return res.status(500).send({
                success: false,
                message: "There is no foodId found ",
            });
        }
        const food = await foodModel.find({ resturent: resturentId });
        if (!food) {
            return res.status(500).send({
                success: false,
                message: "There is no food found ",
            });
        }

        res.status(200).send({
            success: true,
            message: "Food gets Successfully ",
            foodItems: food.length,
            food,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "There is some error in get food Api by Resturent ",
        });
    }
};

const updateFoodController = async (req, res) => {
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

        const foodId = req.params.id;
        if (!foodId) {
            return res.status(500).send({
                success: false,
                message: "There is no foodId found",
            });
        }

        const updatedFood = await foodModel.findByIdAndUpdate(
            foodId,
            {
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
            },
            {
                new: true,
            }
        );
        res.status(200).send({
            success: true,
            message: "Data Updated successfully ",
            updatedFood,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "There is some error in update food Api ",
        });
    }
};

const deleteFoodController = async (req, res) => {
    try {
        const foodId = req.params.id;
        if (!foodId) {
            return res.status(500).send({
                success: false,
                message: "There is no foodId found",
            });
        }

        await foodModel.findByIdAndDelete(foodId);

        // await foodModel.save();
        res.status(200).send({
            success: true,
            message: "Data deleted Successfully ",
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "There is some error in delete food Api",
        });
    }
};

const placeOrderController = async (req, res) => {
    try {
        const { cart } = req.body;
        if (!cart) {
            return res.status(500).send({
                success: false,
                message: "Please provide Cart details and payment",
            });
        }
        let total = 0;
        //cal

        cart.map((i) => {
            total += i.price;
        });
        const newOrder = await orderModel({
            foods: cart,
            payment: total,

            buyer: req.body.id,
        });
        await newOrder.save()
        res.status(201).send({
            success: true,
            message: "Order Created Successfully",
            newOrder
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error in placing order Api",
        });
    }
};
//changing order Status 
const orderStatusController = async (req, res) => {
    try {
        const orderId = req.params.id;
        if (!orderId) {
            return res.status(404).send({
                success: false,
                message: "OrderId is Required",
            });
        }
        const { status } = req.body;
        const order = await orderModel.findByIdAndDelete(orderId, { status: status }, { new: true })
        res.status(200).send({
            success: true,
            message: "order Status Successful"

        })
    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: "Error in order status Api",
        });
    }
}
module.exports = {
    createFoodController,
    getAllFoodController,
    getFoodController,
    getFoodByResturentController,
    updateFoodController,
    deleteFoodController,
    placeOrderController,
    orderStatusController
};
