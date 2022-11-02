import { crearServidor } from './svr.js';
const yargs = require("yargs/yargs")(process.argv.slice(2));

const args = yargs
    .default({ port: 8080, mode: "fork" })
    .alias({ p: "port", m: "mode" })
    .argv;

newServer(args.port);
console.log(`escuchando en puerto ${args.port}`);