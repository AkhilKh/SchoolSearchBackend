var express = require("express");
var router = express.Router();
var SchoolRegister = require("../models/schoolRegister");

const SchoolUserControllers = require("../controllers/schoolControllers");

//Post Register school
router.post("/schoolRegister",  SchoolUserControllers.school_register_post);

//Get Register school
router.get("/schoolRegister", SchoolUserControllers.school_registration_get);

//Get login school
router.get("/schoolLogin", async(req, res) => {
    res.send("Login");
})

//login check
router.post("/schoolLogin", SchoolUserControllers.login_school_post);

//Post Register User
// router.post("/schoolRegister", async (req, res) => {
//     try {
//         const password = req.body.password;
//         const cPassword = req.body.confirmPassword;

//         if (password === cPassword){
//             const RegisterSchool = new SchoolRegister({
//                 name : req.body.name,
//                 email : req.body.email,
//                 password : req.body.password,
//                 confirmPassword : req.body.cPassword,
//                 phone : req.body.phone,
//                 category : req.body.category
//             })


//             //password hash not now

//             const registeredSchool = await RegisterSchool.save();
//             res.status(201).send(registeredSchool);

//         }
//         else{
//             res.send("password not matching");
//         }

//     } catch (error) {
//         res.status(400).send("HI");
//     }

// })



//login check
// router.post("/schoolLogin", async(req, res) => {
// try{
//     const email = req.body.email;
//     const password = req.body.password;

//     const useremail = await SchoolRegister.findOne({email : email});

//     if(useremail.password === password){
//         res.status(201).send("login")
//     } else{
//         res.send("password not match");
//     }
// } catch(error) {
// res.status(400).send("invalid email");
// }
// })

module.exports = router;

