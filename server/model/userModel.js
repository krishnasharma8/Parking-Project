const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please add your email"],
        },
        email: {
            type: String,
            require: [true, "Please add your first name"],
        },
        phoneNumber: {
            type: Number,
            require: [true, "Please add your phone number"],
        },
        password: {
            type: String,
            require: [true, "Please set your password"],
        },
        role: {
            type: String,
            require: [true, "Please add your role"],
        }

    }
)

module.exports = mongoose.model("User", userSchema)