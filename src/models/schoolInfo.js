const mongoose = require("mongoose");

//Define User Schema
const schoolInfoSchema = new mongoose.Schema({
    schoolName : {type : String},
    schoolCode : {type : String},
    schoolCity : {type : String},
    board : {type : String},
    brouchure : {type : Buffer}, //not working now
    aboutOnePara : {type : String},
    aboutSecondPara : {type : String},
    website : {type : String},
    schoolImage : {type : Buffer}, //not working now
    address : {type : String},
    schoolContact : {type : Array},
    schoolEmail : {type : Array}
     
})


//create collection
const SchoolInfo = new mongoose.model("SchoolInfo", schoolInfoSchema);

module.exports = SchoolInfo;
