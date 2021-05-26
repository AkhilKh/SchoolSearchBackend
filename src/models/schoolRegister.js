const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Define User Schema
const schoolSchema = new mongoose.Schema({
    schoolName : {
        type : String,
        required: true
    },
    schoolEmail : {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    schoolPassword : {
        type : String,
        required: true
    },
    schoolConfirmPassword : {
        type : String,
        required: true
    },
    schoolCity : {
        type : String,
        required: true
    },
    contactPhone : {
        type : Number,
        required: true,
        minlength: 10,
      maxlength: 10
    },
    contactPerson : {
        type : String,
        required: true
    },
    contactPersonPhone : {
        type : Number,
        required: true,
        minlength: 10,
      maxlength: 10
    },
    tokens :[{
        token :{
            type : String,
            required: true
        }
    }]

})

schoolSchema.methods.generateAuthToken = async function(){
    try {
        console.log("token");
        const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY_2);
        console.log(token);
        this.tokens = this.tokens.concat({token:token});
        console.log(this.tokens + "this.token");
        await this.save();
        console.log("yes" + token);
        return token;
    } catch {
        res.send("the nerror part" + error );
        console.log("the nerror part" + error );
    }
}

schoolSchema.pre("save", async function(next) {
    //modified is coz if password change in future so it will hash automatically
    if(this.isModified("schoolPassword")){
        this.schoolPassword = await bcrypt.hash(this.schoolPassword, 10);
        console.log(`current password is ${this.schoolPassword}`);
        //confirm password is undefined after signup coz not to see actual password in confirm password entry
        this.schoolConfirmPassword = await bcrypt.hash(this.schoolConfirmPassword, 10);
        console.log(`current password is ${this.schoolConfirmPassword}`);
    }
})



//create collection
const RegisterSchool = new mongoose.model("RegisterSchool", schoolSchema);

module.exports = RegisterSchool;
