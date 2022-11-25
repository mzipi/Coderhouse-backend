import { config } from "dotenv";

config();

const MONGO_URL = process.env.MONGO_URL;
const MONGO_USR = process.env.MONGO_USR;
const MONGO_PWD = process.env.MONGO_PWD;
const MONGO_DB = process.env.MONGO_DB;
const PROJECT_ID = process.env.PROJECT_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;

export {
    MONGO_URL,
    MONGO_USR,
    MONGO_PWD,
    MONGO_DB,
    PROJECT_ID,
    PRIVATE_KEY,
    CLIENT_EMAIL
};