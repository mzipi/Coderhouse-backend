import * as dotenv from 'dotenv'

dotenv.config({ path: './src/config/.env' })

const MONGO_URL1 = process.env.MONGO_URL1;
const MONGO_URL2 = process.env.MONGO_URL2;
const MONGO_DB = process.env.MONGO_DB;
const MAILER_PASS = process.env.MAILER_PASS;
const MAILER_MAIL = process.env.MAILER_MAIL;
const CONTAINER = process.env.CONTAINER;

export {
    MONGO_URL1,
    MONGO_URL2,
    MONGO_DB,
    MAILER_PASS,
    MAILER_MAIL,
    CONTAINER
};