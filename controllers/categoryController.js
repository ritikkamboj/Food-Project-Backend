const CategoryModel = require("../models/CategoryModel");

const categoryCreateController = async (req, res) => {
    try {
        const { title, imageUrl } = req.body;

        const catCreated = await CategoryModel.create({ title: title, imageUrl: imageUrl });
        if (!title) {
            return res.status(500).send({
                success: false,
                message: "No Category created "
            })

        }

        res.status(201).send({
            success: true,
            message: "Category created Successfully ",
            catCreated
        })
        await catCreated.save();

    }
    catch (err) {
        console.log(err);

        res.status(500).send({
            success: false,
            message: "There is some error in create category Api "
        })
    }

}

const getAllCategoriesController = async (req, res) => {
    try {
        const allCategories = await CategoryModel.find({});
        if (!allCategories) {
            return res.status(500).send({
                success: false,
                message: "No Categories found inside DB",
                allCategories
            })
        }

        res.status(200).send({
            success: true,
            message: "Categories Fetched Successfully ",
            allCategories
        })


    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Get All Categories not working"
        })

    }

}
module.exports = { categoryCreateController, getAllCategoriesController };