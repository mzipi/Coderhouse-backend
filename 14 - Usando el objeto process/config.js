const dotenv = require("dotenv");

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const MONGO_USR = process.env.MONGO_USR;
const MONGO_PWD = process.env.MONGO_PWD;
const MONGO_DB = process.env.MONGO_DB;

module.exports = {
    MONGO_URL,
    MONGO_USR,
    MONGO_PWD,
    MONGO_DB
};