import session from "express-session";
import MongoStore from "connect-mongo";
import { MONGO_URL2 } from "../config.js";

const mongoUrl = MONGO_URL2;
const store = MongoStore.create({ mongoUrl, ttl: 300 });
const sessionHandler = session({
    store,
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
});

export default sessionHandler;