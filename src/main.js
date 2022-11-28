const { createServer } = require("http");
const { Server } = require("socket.io");
const yargs = require("yargs/yargs")(process.argv.slice(2));
const cluster = require("cluster");
const cpus = require("os").cpus().length;

const app = require("./server.js");
const logger = require("./api/logger.js");

const server = createServer(app);
const io = new Server(server);
const args = yargs
    .default({ PORT: 8080, mode: "FORK" })
    .alias({ p: "PORT", m: "mode" })
    .argv;

const PORT = args.PORT;

if (args.mode == "CLUSTER" && cluster.isPrimary) {
    
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    };
    
    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });

} else {

    io.on ("connection", (socket) => {
        socket.on("chat message", (msg) => io.emit("chat message", msg));
        socket.on("add item", (product) => io.emit("add item", product));
    });

    server.listen(PORT, () => {
        logger.info(`Sirviendo en http://localhost:${PORT} con PID: ${process.pid}`);
    });

    server.on("error", err => logger.error(`Error en el servidor: ${err}`));
};