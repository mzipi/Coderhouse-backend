const http = require('http');

module.exports = function newServer(port) {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end(`Hola mundo desde el proceso ${process.pid}!`)
    }).listen(port)

    console.log(`Worker ${process.pid} started`)
}