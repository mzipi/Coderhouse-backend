const mongoose = require("mongoose");
const { MONGO_USR, MONGO_PWD, MONGO_DB } = require("../config.js");

mongoose.connect(`mongodb+srv://${MONGO_USR}:${MONGO_PWD}@cluster0.t5mkzof.mongodb.net/${MONGO_DB}`);
 
module.exports = mongoose.model("Users",{
    username: String,
    password: String,
    name: String,
    lastname: String,
    phone: String,
    image: String
});