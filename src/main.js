import cluster from "cluster";
import { createServer } from "http";
import { Server } from "socket.io";
import os from "os";
import yargs from "yargs/yargs";

import app from "./server.js";
import logger from "./api/logger.js";

const PORT = process.env.PORT || 8080;
const server = createServer(app);
const io = new Server(server);
const cpus = os.cpus().length;
const args = yargs(process.argv.slice(2))
    .default({ port: 8080, mode: "FORK" })
    .alias({ p: "port", m: "mode" })
    .argv;

io.on ("connection", (socket) => {
    socket.on("chat message", (msg) => io.emit("chat message", msg));
    socket.on("add item", (product) => io.emit("add item", product));
});

if (args.mode == "CLUSTER" && cluster.isPrimary) {

    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    };
    
    cluster.on("exit", (worker, code, signal) => {
        logger.info(`Worker ${worker.process.pid} died`);
    });
} else {
    server.listen(PORT, () => {
        logger.info(`Sirviendo en http://localhost:${PORT} con PID: ${process.pid}`);
    });
    server.on("error", err => logger.error(`Error en el servidor: ${err}`));
};