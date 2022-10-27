const session = require("express-session");
const MongoStore = require("connect-mongo");
const config = require("../config.js");

const mongoUrl = `mongodb+srv://${config.USR}:${config.PWD}@cluster0.t5mkzof.mongodb.net/${config.DB}`;
const store = MongoStore.create({ mongoUrl, ttl: 300 });
const sessionHandler = session({
    store,
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
});

module.exports = sessionHandler;