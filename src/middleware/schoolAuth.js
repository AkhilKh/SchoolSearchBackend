const jwt = require("jsonwebtoken");
const RegisterSchool = require("../models/schoolRegister");

const schoolAuth = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verifySchoolUser = jwt.verify(token, process.env.SECRET_KEY_2);
        console.log(verifySchoolUser);

        const schoolUser = await RegisterSchool.findOne({_id:verifySchoolUser._id});
        console.log(user);
        next();


    } catch (error) {
res.status(401).send(error)
    }
}