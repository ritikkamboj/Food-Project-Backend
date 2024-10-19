const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    title:
    {
        type: String,
        required: [true, "please Enter the title of Category"]
    },
    imageUrl:
    {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/5235/5235253.png"
    }
}, { timestamps: true });

const CategoryModel = mongoose.model("categoryModel", CategorySchema);

module.exports = CategoryModel;
