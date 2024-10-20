const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "food title is required"],
    },
    foodTags: {
        type: String,
    },
    category: {
        type: String,
    },
    code: {
        type: Number,
    },
    isAvailaible: {
        type: Boolean,
        default: true,
    },
    resturent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "resturent",
    },

    rating: {
        type: Number,
        default: 5,
        max: 5,
        min: 1,
    },
    ratingCount: {
        type: Number,
    },
    description:
    {
        type: String,
        required: [true, 'Description is required']

    },
    price:
    {
        type: Number,
        required: [true, "Price is required "]
    },
    imageUrl:
    {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8oC2l-cH9o5U5-36aE7Gs-VcHq7g1XPC0CQ&s"
    },

});

const foodModel = mongoose.model("foodModel", foodSchema);

module.exports = foodModel;
