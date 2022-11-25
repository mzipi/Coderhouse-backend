const { MARIADB_USR, MARIADB_PWD, MARIADB_DB } = require("../config.js");

const options = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: MARIADB_USR,
        password: MARIADB_PWD,
        database: MARIADB_DB
    }
}
module.exports = options