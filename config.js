import { config } from "dotenv";

config();

const MARIADB_USR = process.env.MARIADB_USR;
const MARIADB_PWD = process.env.MARIADB_PWD;
const MARIADB_DB = process.env.MARIADB_DB;
const MONGO_URL = process.env.MONGO_URL;
const MONGO_USR = process.env.MONGO_USR;
const MONGO_PWD = process.env.MONGO_PWD;
const MONGO_DB = process.env.MONGO_DB;
const PROJECT_ID = process.env.PROJECT_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;

export {
    MARIADB_USR,
    MARIADB_PWD,
    MARIADB_DB,
    MONGO_URL,
    MONGO_USR,
    MONGO_PWD,
    MONGO_DB,
    PROJECT_ID,
    PRIVATE_KEY,
    CLIENT_EMAIL
};
