// const knex = require('knex')({
//     client: 'sqlite3',
//     connection: {
//         filename: './db/db.sqlite'
//     }
// })

const options = {
    client: 'sqlite3',
    connection: {
        filename: './db/mydb.sqlite'
    }
}

module.exports = options;