const app = require("./server.js");
const logger = require("./api/logger.js");
const cluster = require("cluster");

const PORT = process.env.PORT || 8080;

if (process.env.mode == "CLUSTER" && cluster.isPrimary) {

    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    };
    
    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    const server = app.listen(PORT, () => {
        console.log(`Sirviendo en http://localhost:${PORT} con PID: ${process.pid}`);
    });
    server.on("error", err => logger.error(`Error en el servidor: ${err}`));
};

