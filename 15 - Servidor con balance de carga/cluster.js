const cluster = require("cluster");
const cpus = require("os").cpus().length;
const { newServer } = require("./svr.js");
const yargs = require("yargs/yargs")(process.argv.slice(2));

const args = yargs
    .default({ port: 8080, mode: "fork" })
    .alias({ p: "port", m: "mode" })
    .argv;

if (cluster.isPrimary) {
    console.log(`PID PRIMARIO ${process.pid}`)

    for (let i = 0; i < cpus; i++) {
        cluster.fork()
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`)
        cluster.fork()
    })
} else {
    newServer(args.port);
}