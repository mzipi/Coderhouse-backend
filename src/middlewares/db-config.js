import mongoose from "mongoose";
import { MONGO_URL2 } from "../config/config.js";

mongoose.Promise = global.Promise;
const dbUrl = MONGO_URL2;
const connect = async () => {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on("error", () => {
        console.log("could not connect");
    });
    db.once("open", () => {
        console.log("Successfully connected to database");
    });
};

export default connect;