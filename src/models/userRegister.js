const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    confirmPassword : {
        type : String,
        required: true
    },
    phone : {
        type : String,
    },
    category : {
        type : String,
        required: true
    }
})

const Register = new mongoose.model("Register", userSchema)

module.exports = Register;