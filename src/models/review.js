const mongoose = require("mongoose");

//Define review Schema
const reviewSchema = new mongoose.Schema({
    schoolName : {type : String},
    schoolCity : {type : String},
    name : {type : String},
    catrgory : {type : String},
    ratings : {type : Number},
    review : {type : String},
    class : {type : String},
     
})


//create collection
const reviews = new mongoose.model("reviews", reviewSchema);

module.exports = reviews;
