const session = require("express-session");
const MongoStore = require("connect-mongo");
const { USR, PWD, DB } = require("../config");

const mongoUrl = `mongodb+srv://${USR}:${PWD}@cluster0.t5mkzof.mongodb.net/${DB}`;
const store = MongoStore.create({ mongoUrl, ttl: 300 });
const sessionHandler = session({
    store,
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
});

module.exports = sessionHandler;