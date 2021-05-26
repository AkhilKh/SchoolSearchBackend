var reviews = require("../models/review");

//Get all reviews of all school
exports.school_review_get = async (req, res) => {
// try{
//     let schoolName = req.query.schoolName;
//     console.log(schoolName);
//     reviews.find(function (err, schoolReview) {
//         if (err) return console.error(err);
//         console.log(schoolReview);
//         res.json(schoolReview); } )
//     } catch (error) {
//         console.log("Error");                         +
//         res.status(400).send(error);

// }
var schoolName = req.params.schoolName;
console.log(schoolName);
await reviews.find({
            schoolName: schoolName
        }, function(err, reviews) {
            if (err) throw err;
            if (reviews) {
                res.json(reviews)
                console.log(reviews)
            } else {
                res.send("error");
            }
            }
        )
}
    // const schoolName = req.params.schoolName;
    // const schoolCity = req.params.schoolCity;
    // 	 reviews.find({schoolName : schoolName}).then((schoolReviews) => {
    //     res.status(200).json(schoolReviews);
    //   });
    // console.log(reviews);
    // console.log(schoolReviews);
    // console.log(schoolName);
    // console.log(schoolReviews.schoolName);
//    if(schoolReviews.schoolName === schoolName){
//         res.status(201).send("get review")
//     } else{
//         res.send("not match");
//     }


    exports.school_review_post = async (req, res) => {
    try {
        const schoolReview = new reviews ({

        schoolName : req.body.schoolName,
        schoolCity : req.body.schoolCity,
        name : req.body.name,
        catrgory : req.body.catrgory,
        ratings : req.body.ratings,
        review : req.body.review,
        class : req.body.class
    
        })
        const schoolReviews = await schoolReview.save();
        res.status(201).send(schoolReviews);
    } catch (error) {
        console.log("Error");
        res.status(400).send(error);
    }

}