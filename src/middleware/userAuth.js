const jwt = require("jsonwebtoken");
const RegisterUser = require("../models/userRegister");

const userAuth = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY_1);
        console.log(verifyUser);

        const user = await RegisterUser.findOne({_id:verifyUser._id});
        console.log(user);
        next();


    } catch (error) {
res.status(401).send(error)
    }
}