var SchoolRegister = require("../models/schoolRegister");
const bcrypt = require("bcryptjs");

//School Registration Get
exports.school_registration_get = async (req, res) => {
    try {
        SchoolRegister.find({
        }, function(err, schoolUsersData) {
            if (err) throw err;
            if (schoolUsersData) {
                res.json(schoolUsersData)
            } else {
                res.send(JSON.stringify({
                    error : 'Error'
                }))
            }
        })
    } catch(error) {
        res.status(400).send(error);
        console.log("school Register Catch error");
    }
    }
    
//School Registration Post
exports.school_register_post = async (req, res) => {
    try {
        const schoolPassword = req.body.schoolPassword;
        const schoolConfirmPassword = req.body.schoolConfirmPassword;

        if (schoolPassword === schoolConfirmPassword){
            const RegisterSchool = new SchoolRegister({
                schoolName : req.body.schoolName,
                schoolEmail : req.body.schoolEmail,
                schoolPassword : req.body.schoolPassword,
                schoolConfirmPassword : req.body.schoolConfirmPassword,
                schoolCity : req.body.schoolCity,
                contactPhone : req.body.contactPhone,
                contactPerson : req.body.contactPerson,
                contactPersonPhone : req.body.contactPersonPhone
            })
            const token = await RegisterSchool.generateAuthToken();
            console.log("token is" + token);
            //password hash not now

            res.cookie("schoolRegister", token);


            const registeredSchool = await RegisterSchool.save();
            res.status(201).send(registeredSchool);
        }
        else{
            res.send("password not matching");
        }

    } catch (error) {
        res.status(400).send(error);
    }

}

//school Login Post
exports.login_school_post = async(req, res) => {
    try{
        const schoolEmail = req.body.schoolEmail;
        const schoolPassword = req.body.schoolPassword;
    
        const schoolEmailid = await SchoolRegister.findOne({schoolEmail : schoolEmail});

        const isMatch = await bcrypt.compare(schoolPassword, schoolEmailid.schoolPassword);
       
        const token = await schoolEmailid.generateAuthToken();
        console.log("School token is" + token);

        res.cookie("schoolLogin", token);

        if(isMatch){
            console.log("school Login");
            res.status(201).send("login")
        } else{
            res.send("password not match");
        }
    } catch(error) {
    res.status(400).send("invalid email");
    console.log("school Login catch error");
    }
    }