require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;
const MONGO_USR = process.env.MONGO_USR;
const MONGO_PWD = process.env.MONGO_PWD;
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
const CART = process.env.CART;
const PRODUCT = process.env.PRODUCT;

module.exports = {
    MONGO_URL,
    MONGO_USR,
    MONGO_PWD,
    MONGO_DB,
    PROJECT_ID,
    PRIVATE_KEY,
    CLIENT_EMAIL,
    MAILER_PASS,
    MAILER_MAIL,
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    FROM_PHONE,
    TO_PHONE,
    CART,
    PRODUCT
};