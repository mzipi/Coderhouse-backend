const mongoose = require("mongoose");
 
module.exports = mongoose.model("Users",{
    username: String,
    password: String,
    name: String,
    lastname: String,
    phone: String,
    image: String
});