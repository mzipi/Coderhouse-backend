import session from 'express-session';
import MongoStore from 'connect-mongo';
import { mongoUrl } from './db-connection.js';
import { SESSION_SECRET } from '../config/config.js';

const store = MongoStore.create({
    mongoUrl,
    ttl: 300,
});

const sessionHandler = session({
    store,
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 },
});

export default sessionHandler;