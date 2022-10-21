import session from "express-session";
import MongoStore from "connect-mongo";
import config from "../config.js";

const mongoUrl = `mongodb+srv://${config.USR}:${config.PWD}@cluster0.t5mkzof.mongodb.net/${config.DB}`;
const store = MongoStore.create({ mongoUrl, ttl: 300 });

export const sessionHandler = session({
    store,
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
});