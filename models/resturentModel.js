const mongoose = require("mongoose");

const resturentSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        imageUrl: {
            type: String,
        },
        foods: {
            type: Array,
        },
        time: {
            type: String,
        },
        pickup: {
            type: Boolean,
            default: true,
        },
        delivery: {
            type: Boolean,
            default: true,
        },
        isOpen: {
            type: Boolean,
            default: true,
        },
        logoUrl: {
            type: String,
        },
        rating: {
            type: Number,
            default: 1,
            max: 5,
            min: 1,
        },
        ratingCount: {
            type: String,
        },
        code: {
            type: String,
        },
        coords: {
            id: { type: String },
            latitude: { type: Number },
            latitudeDelta: { type: Number },
            longitude: { type: Number },
            longitudeDelta: { type: Number },
            address: {
                type: String,
            },
            title: { type: String },
        },
    },
    {
        timestamps: true,
    }
);

const resturent = mongoose.model("resturent", resturentSchema);

module.exports = resturent;
