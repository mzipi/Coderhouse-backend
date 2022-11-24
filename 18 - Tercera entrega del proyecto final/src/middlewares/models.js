import { connect, model } from "mongoose";
import { MONGO_USR, MONGO_PWD, MONGO_DB } from "../config.js";

connect(`mongodb+srv://${MONGO_USR}:${MONGO_PWD}@cluster0.t5mkzof.mongodb.net/${MONGO_DB}`);
 
export default model("Users",{
    email: String,
    password: String,
    name: String,
    address: String,
    age: Number,
    phone: String,
    image: String
});