const SchoolInfo = require("../models/schoolInfo");

//Get school Info
exports.school_info_get = async(req, res) => {
        var query = req.params.query;
        SchoolInfo.find({
            schoolCode: query
        }, function(err, result) {
            if (err) throw err;
            if (result) {
                res.json(result)
            } else {
                res.send(JSON.stringify({
                    error : 'Error'
                }))
            }
        })
    }

//     try {
//         await SchoolInfo.findOne({schoolCode : req.params.schoolCode}, req.body).then((showSchoolInfo) => {
//             if (!showSchoolInfo) {
//                 console.log("er");
//                 return res.status(404).send("er");
//             }
//             console.log(showSchoolInfo);

//             res.send(showSchoolInfo);
//     } )
// }catch (error) {
//         console.log(error);
//         res.status(400).send(error);
//     }
// }

//Post school Info
exports.school_info_post = async (req, res) => {
    try {
        const SchoolInform = new SchoolInfo ({

        schoolName : req.body.schoolName,
        schoolCity : req.body.schoolCity,
        schoolCode : req.body.schoolCode,
        board : req.body.board,
        brouchure : req.body.brouchure,
        aboutOnePara : req.body.aboutOnePara,
        aboutSecondPara : req.body.aboutSecondPara,
        website : req.body.website,
        schoolImage : req.body.schoolImage,
        address : req.body.address,
        schoolContact : req.body.schoolContact,
        schoolEmail : req.body.schoolEmail
        })
        const schoolInformation = await SchoolInform.save();
        res.status(201).send(schoolInformation);
    } catch (error) {
        console.log("Error");
        res.status(400).send(error);
    }

}

//Patch for update 
exports.school_info_patch = async(req, res) => {
    try {
        await SchoolInfo.findOneAndUpdate({schoolCode : req.params.schoolCode}, req.body, {new: true}).then((updateSchoolInfo) => {
            if (!updateSchoolInfo) {
                return res.status(404).send();
            }
            res.send(updateSchoolInfo);
            console.log(updateSchoolInfo);
    } )
}catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}