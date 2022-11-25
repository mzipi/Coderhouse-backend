const dotenv = require("dotenv");

dotenv.config();

const MARIADB_USR = process.env.MARIADB_USR;
const MARIADB_PWD = process.env.MARIADB_PWD;
const MARIADB_DB = process.env.MARIADB_DB;

module.exports = {
    MARIADB_USR,
    MARIADB_PWD,
    MARIADB_DB
};