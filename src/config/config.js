import * as dotenv from 'dotenv'

dotenv.config({ path: './src/config/.env' })

const MONGO_URL = process.env.MONGO_URL;
const MAILER_PASS = process.env.MAILER_PASS;
const MAILER_MAIL = process.env.MAILER_MAIL;
const CONTAINER = process.env.CONTAINER;
const NODE_ENV = process.env.NODE_ENV;
const SESSION_SECRET = process.env.SESSION_SECRET;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const JWT_SECRET = process.env.JWT_SECRET;

export {
    MONGO_URL,
    MAILER_PASS,
    MAILER_MAIL,
    CONTAINER,
    NODE_ENV,
    SESSION_SECRET,
    PRIVATE_KEY,
    JWT_SECRET
};