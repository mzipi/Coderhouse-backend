import { Router } from 'express';
import session from "express-session";
import MongoStore from "connect-mongo";
import config from "../config.js";

var usr = config.USR;
var pwd = config.PWD;
var db = config.DB;
const mongoUrl = `mongodb+srv://${usr}:${pwd}@cluster0.t5mkzof.mongodb.net/${db}`;
const store = MongoStore.create({ mongoUrl, ttl: 300 });
const router = Router();

router.use(session({
    store,
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
}));

router.get('/', (req, res) => {
    res.render('logout', { msg: 'Hasta luego', name: req.session.name });
});

export default router;