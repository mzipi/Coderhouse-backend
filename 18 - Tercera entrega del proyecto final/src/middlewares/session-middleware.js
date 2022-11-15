const session = require("express-session");
const MongoStore = require("connect-mongo");
const { MONGO_USR, MONGO_PWD, MONGO_DB } = require("../config.js");

const mongoUrl = `mongodb+srv://${MONGO_USR}:${MONGO_PWD}@cluster0.t5mkzof.mongodb.net/${MONGO_DB}`
const store = MongoStore.create({ mongoUrl, ttl: 300 });
const sessionHandler = session({
    store,
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
});

module.exports = sessionHandler;