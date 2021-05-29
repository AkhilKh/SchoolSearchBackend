const mongoose = require("mongoose");

var MONGODB_URI = "mongodb+srv://akhi945681:Eduflow@765@cluster0.qtm3a.mongodb.net/schoolsInfo?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("connection successful!");
}).catch((e) => {
    console.log("no connection" + e);
})

