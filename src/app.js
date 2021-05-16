const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

require("./db/conn");
const Register = require("./models/userRegister");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send("Hello");
})

app.post("/userRegister", async (req, res) => {
    try {
        const password = req.body.password;
        const cPassword = req.body.confirmPassword;

        if (password === cPassword){
            const RegisterUser = new Register({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password,
                confirmPassword : req.body.cPassword,
                phone : req.body.phone,
                category : req.body.category

            })
            const registered = await RegisterUser.save();
            res.status(201).send("Registered");
        }
        else{
            res.send("password not matching");
        }

    } catch (error) {
        res.status(400).send(error);
    }

})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})