const { MONGO_USR, MONGO_PWD, MONGO_DB } = require("../config.js");

const options = {
    client: 'mongodb',
    connection: {
        host: 'localhost',
        user: MONGO_USR,
        password: MONGO_PWD,
        database: MONGO_DB
    }
}
export default options
