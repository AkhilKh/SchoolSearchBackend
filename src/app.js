require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
var multer = require('multer');

require("./db/conn");
// const UserRegister = require("./models/userRegister");
// const SchoolRegister = require("./models/schoolRegister");

var Users = require("./routes/users");
var SchoolUsers = require("./routes/schoolUsers");
var SchoolInfo = require("./routes/schoolInfo");
var SchoolReview = require("./routes/review");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.get("/", (req, res) => {
//     res.send("Hello");
// })

console.log(process.env.SECRET_KEY_1);
console.log(process.env.SECRET_KEY_2);


app.use('/', Users);
app.use('/userLogin', Users);
app.use('/', SchoolUsers);
app.use('/schoolLogin', SchoolUsers );
app.use('/', SchoolInfo);
app.use('/', SchoolReview);

 
// //Get Register user
// app.get("/userRegister", async(req, res) => {
//     res.send("register");
// })

// //Get login user
// app.get("/userLogin", async(req, res) => {
//     res.send("Login");
// })

// //Get Register School
// app.get("/schoolRegister", async(req, res) => {
//     res.send("register");
// })

//Post Register user
// app.post("/userRegister", async (req, res) => {
//     try {
//         const password = req.body.password;
//         const cPassword = req.body.confirmPassword;

//         if (password === cPassword){
//             const RegisterUser = new UserRegister({
//                 name : req.body.name,
//                 email : req.body.email,
//                 password : req.body.password,
//                 confirmPassword : req.body.cPassword,
//                 phone : req.body.phone,
//                 category : req.body.category
//             })

//             //password hash not now

//             const registered = await RegisterUser.save();
//             res.status(201).send(registered);
//         }
//         else{
//             res.send("password not matching");
//         }

//     } catch (error) {
//         res.status(400).send(error);
//     }

// })

//login check
// app.post("/userLogin", async(req, res) => {
// try{
//     const email = req.body.email;
//     const password = req.body.password;

//     const useremail = await Register.findOne({email : email});

//     if(useremail.password === password){
//         res.status(201).send("login")
//     } else{
//         res.send("password not match");
//     }
// } catch(error) {
// res.status(400).send("invalid email");
// }
// })

//Post Register School
// app.post("/schoolRegister", async (req, res) => {
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
//                 contactPerson : req.body.contactPerson,
//                 contactPersonPhone : req.body.contactPersonPhone
//             })

//             //password hash not now

//             const registered = await RegisterSchool.save();
//             res.status(201).send(registered);
//         }
//         else{
//             res.send("password not matching");
//         }

//     } catch (error) {
//         res.status(400).send(error);
//     }

// })

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})