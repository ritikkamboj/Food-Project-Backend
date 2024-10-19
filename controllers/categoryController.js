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

const updateCategoriesController = async (req, res) => {
    try {
        const categoryId = req.params.id;
        if (!categoryId) {
            return res.status(500).send({
                success: false,
                message: "Please enter the valid category Id"
            })
        }
        const { title, imageUrl } = req.body;

        const category = await CategoryModel.findById(categoryId);
        if (!category) {
            return res.status(500).send({
                success: false,
                message: "category not found"
            })
        }
        category.title = title;
        category.imageUrl = imageUrl;
        await category.save();

        res.status(200).send({
            success: true,
            message: "Category Updated Successfully "
        })


    }
    catch (err) {
        res.status.send({
            success: false,
            message: "There is an error in category update Api"
        })
    }
}
module.exports = { categoryCreateController, getAllCategoriesController, updateCategoriesController };