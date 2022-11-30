import * as dotenv from 'dotenv'

dotenv.config({ path: "./src/config/.env" })

const MARIADB_USR = process.env.MARIADB_USR;
const MARIADB_PWD = process.env.MARIADB_PWD;
const MARIADB_DB = process.env.MARIADB_DB;
const MONGO_URL1 = process.env.MONGO_URL1;
const MONGO_URL2 = process.env.MONGO_URL2;
const MONGO_DB = process.env.MONGO_DB;
const PROJECT_ID = process.env.PROJECT_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const MAILER_PASS = process.env.MAILER_PASS;
const MAILER_MAIL = process.env.MAILER_MAIL;
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const FROM_PHONE = process.env.FROM_PHONE;
const TO_PHONE = process.env.TO_PHONE;
const PRODUCT = process.env.PRODUCT;
const MSG = process.env.MSG;

export {
    MARIADB_USR,
    MARIADB_PWD,
    MARIADB_DB,
    PROJECT_ID,
    PRIVATE_KEY,
    CLIENT_EMAIL,
    MONGO_URL1,
    MONGO_URL2,
    MONGO_DB,
    MAILER_PASS,
    MAILER_MAIL,
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    FROM_PHONE,
    TO_PHONE,
    PRODUCT,
    MSG
};