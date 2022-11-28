const session = require("express-session");
const MongoStore = require("connect-mongo");
const { MONGO_URL2 } = require("../config");

const mongoUrl = MONGO_URL2;
const store = MongoStore.create({ mongoUrl, ttl: 300 });
const sessionHandler = session({
    store,
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
});

module.exports = sessionHandler;