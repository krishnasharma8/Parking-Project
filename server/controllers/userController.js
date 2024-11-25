const asyncHandler = require("express-async-handler")
const User = require("../model/userModel")
const bcrypt = require("bcrypt")

require("dotenv").config()

const userRegister = asyncHandler(async (req,res) => {
    const {name, email, phoneNumber, password, role} = req.body

    if(!name || !email || !phoneNumber || !password || !role){
        res.status(400)
        throw new Error("Please provide all fields")
    }

    const userExists = await User.findOne({email})
    if(userExists){
        return res.status(400).json({message: "User Already Exists"})
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        phoneNumber,
        password: hashedPassword,
        role 
    })

    res.status(201).json({message: "User Registered Successfully", user})
})

module.exports = { userRegister }