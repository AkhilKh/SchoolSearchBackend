var UserRegister = require("../models/userRegister");
const bcrypt = require("bcryptjs");

//upload image
// var multer = require('multer');
 
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
 
// var upload = multer({ storage: storage });

//User Registration Get
exports.register_users_get = async (req, res) => {
try {
    UserRegister.find({
    }, function(err, usersData) {
        if (err) throw err;
        if (usersData) {
            res.json(usersData)
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
} catch(error) {
    res.status(400).send(error);
    console.log("User Register Catch error");
}
}

//User Registration Post
exports.register_users_post = async (req, res) => {
    try {
// req.body fields are entry by user
    const password = req.body.password; 
    const cPassword = req.body.confirmPassword;

    if (password === cPassword){
        const RegisterUser = new UserRegister({
            name : req.body.name,
            // image : req.body.image,
            email : req.body.email,
            password : req.body.password,
            confirmPassword : req.body.confirmPassword,
            phone : req.body.phone,
            category : req.body.category,
            school : req.body.school,
            city : req.body.city,
            class : req.body.class
        })
        const token = await RegisterUser.generateAuthToken();
        //password hash middleware

        const registered = await RegisterUser.save();
        res.status(201).send(registered);
    }
    else{
        res.send("password not matching");
    }

} catch (error) {
    res.status(400).send(error);
    console.log("User Register Catch error");
}
}

//User Profile Update Patch - not working
exports.user_profile_update = async(req, res) => {
    try {
        console.log(req.params.email);
        await UserRegister.findOneAndUpdate({email : req.params.email}, req.body, {new: true}).then((updateUserProfile) => {
            if (!updateUserProfile) {
                console.log("updateUserProfile");
                return res.status(404).send();
            }
            res.send(updateUserProfile);
            console.log(updateUserProfile);
    } )
}catch (error) {
    
        console.log(error);
        res.status(400).send(error);
    }
}

//User Login Get
exports.login_users_get = async (req, res) => {
    try {
        res.send("User Login");
    } catch(error) {
        res.status(400).send(error);
        console.log("User Login Catch error");
    }
    }
    
//User Login Post
exports.login_users_post = async(req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
    
        const useremail = await UserRegister.findOne({email : email});

        const isMatch = await bcrypt.compare(password, useremail.password);

        // const token = await useremail.generateAuthToken();
        // console.log("token is" + token);
    
        if(isMatch){
            res.status(201).send("login")
        } else{
            res.send("password not match");
        }
    } catch(error) {
    res.status(400).send("invalid email");
    }
    }