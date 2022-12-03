import { createServer } from 'http';
import { Server } from 'socket.io';
import yargs from 'yargs/yargs';
import cluster from 'cluster';
import { cpus } from 'os';

import app from './server.js';
import { errorLog, infoLog } from './api/logger.js';

const server = createServer(app);
const io = new Server(server);
const args = yargs(process.argv.slice(2))
    .default({ PORT: 8080, mode: 'FORK' })
    .alias({ p: 'PORT', m: 'mode' })
    .argv;

const PORT = args.PORT;

if (args.mode == 'CLUSTER' && cluster.isPrimary) {
    
    for (let i = 0; i < cpus.length; i++) {
        cluster.fork();
    };
    
    cluster.on('exit', (worker, code, signal) => {
        infoLog.info(`Worker ${worker.process.pid} died`);
    });

} else {

    io.on ('connection', (socket) => {
        socket.on('chat message', (msg) => io.emit('chat message', msg));
        socket.on('add item', (product) => io.emit('add item', product));
    });

    server.listen(PORT, () => {
        infoLog.info(`Sirviendo en http://localhost:${PORT} con PID: ${process.pid}`);
    });

    server.on('error', err => errorLog.error(`Error al iniciar el servidor: ${err}`));
};