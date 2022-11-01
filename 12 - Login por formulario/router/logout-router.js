import { Router } from 'express';
import session from "express-session";
import MongoStore from "connect-mongo";
import { MONGO_USR, MONGO_PWD, MONGO_DB } from "../config.js";

const mongoUrl = `mongodb+srv://${MONGO_USR}:${MONGO_PWD}@cluster0.t5mkzof.mongodb.net/${MONGO_DB}`;
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
    req.session.destroy(err => { console.log(err) });
});

export default router;