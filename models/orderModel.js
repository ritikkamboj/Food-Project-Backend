const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        foods: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "foodModel",
            },
        ],
        payment: {},
        buyer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'

        },
        status: {
            type: String,
            enum: ['Prepairing', 'prepared', 'on the way', 'delivered'],
            default: 'Prepairing'
        }
    },
    { timestamps: true }
);

const orderModel = mongoose.model("orderModel", orderSchema);
module.exports = orderModel;
