const mongoose = require("mongoose");

//Schema

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "user name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    address: {
        type: Array,
    },
    phone: {
        type: String,
        required: [true, "Phone Number is required"],
    },
    userType: {
        type: String,
        required: [true, "user type is required "],
        default: "client",
        enum: ["cleint", "admin", "vendor", "driver"],
    },
    profile: {
        type: String,
        default:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fprofile-picture_12225935&psig=AOvVaw0SX7fnoDhmDZhAaDUHtkTl&ust=1728976625511000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDh4_6pjYkDFQAAAAAdAAAAABAL",
    },
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema)