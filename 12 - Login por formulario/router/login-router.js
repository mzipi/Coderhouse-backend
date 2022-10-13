import { Router } from 'express';
import session from "express-session";
import MongoStore from "connect-mongo";

const mongoUrl = 'mongodb+srv://coder:mongocoderpwd@cluster0.t5mkzof.mongodb.net/coderhouse';
const store = MongoStore.create({ mongoUrl, ttl: 300 });
const router = Router();
let name;

router.use(session({
    store,
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
}));

router.get('/', (req, res) => {
    if (req.session.name) {
        name = req.session.name;
        res.render('welcome', { msg: 'Bienvenido', name });
    } else {
        res.render('login');
    }
});

router.post('/', (req, res) => {
    if (req.body.user) {
        name = req.body.user;
        req.session.name = name;
        res.render('welcome', { msg: 'Bienvenido', name });
    }
});

export default router;