const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Define User Schema
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    // image: { 
    //     data: Buffer, 
    //     contentType: String 
    //  },
    email : {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type : String,
        required : true,
    },
    confirmPassword : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        minlength: 10,
      maxlength: 10
    },
    category : {
        type : String
    },
    school : {
        type : String
    },
    city : {
        type : String
    },
    class : {
        type : String
    },
    tokens :[{
        token :{
            type : String,
            required: true
        }
    }]
})

userSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY_1);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch {
        res.send("the error part" + error );
    }
}

userSchema.pre("save", async function(next) {
    //modified is coz if password change in future so it will hash automatically
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
        //confirm password is undefined after signup coz not to see actual password in confirm password entry
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);;
    }
})

//create collection
const RegisterUser = new mongoose.model("RegisterUser", userSchema);

module.exports = RegisterUser;
