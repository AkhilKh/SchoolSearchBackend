var express = require("express");
var router = express.Router();
require("../models/userRegister");
// var fs = require('fs');

const UserControllers = require("../controllers/usersControllers");

//upload image
// var multer = require('multer');
 
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         fs.mkdir('./uploads/',(err)=>{
//             cb(null, './uploads/');
//          });
//         },
//     filename: (req, file, cb) => {
//         cb(null, new Date().toISOString() + file.originalname);
//     }
//     });

// var upload = multer({ storage: storage });


//Post Register User
router.post("/userRegister", UserControllers.register_users_post);

//login check
router.post("/userLogin", UserControllers.login_users_post);

//Get Register user
router.get("/userRegister", UserControllers.register_users_get);

//Get login user
router.get("/userLogin", async(req, res) => {
    res.send("Login");
})

//Update Profile Patch- not working
router.patch("/userRegister/:email", UserControllers.user_profile_update);

module.exports = router;

