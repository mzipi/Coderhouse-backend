const express = require("express");
const handlebars = require("express-handlebars");
const { createServer } = require("http");
const { Server } = require("socket.io");
const api_products = require("./router/api_products-router.js");
const index = require("./router/index-router.js");
const products = require("./router/products-router.js");
const msg = require("./router/msg-router.js");
const sessionHandler = require("./middlewares/session-middleware.js");
const login = require("./router/login-router.js");
const logout = require("./router/logout-router.js");
const signup = require("./router/signup-router.js");
const test = require("./router/test-router.js");
const fail_login = require("./router/fail_login-router.js");
const fail_register = require("./router/fail_register-router.js");
const passportMiddleware = require("./middlewares/passport.js");
const info = require("./router/info-router.js");
const randoms = require("./router/api_randoms-router.js");
const yargs = require("yargs/yargs")(process.argv.slice(2));

const app = express();
const server = createServer(app);
const io = new Server(server);
const args = yargs
    .default({ port: 8080 })
    .alias({ p: "port" })
    .argv;

app.engine("handlebars", handlebars.engine());

app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(sessionHandler);
app.use(passportMiddleware);
app.use(express.static(__dirname + '/public'));
app.use("/api/productos", api_products);
app.use("/", index);
app.use("/productos", products)
app.use("/api/mensajes", msg);
app.use("/api/productos-test", test);
app.use("/login", login);
app.use("/logout", logout);
app.use("/register", signup);
app.use("/faillogin", fail_login);
app.use("/failregister", fail_register);
app.use("/info", info);
app.use("/api/randoms", randoms);

// app.get("/logout?", (req, res) => {
//     setTimeout(() => {
//         res.redirect("/login");
//     }, 2000)
// })

io.on("connection", (socket) => {
    socket.on("chat message", (msg) => io.emit("chat message", msg));
    socket.on("add item", (product) => io.emit("add item", product));
});

server.listen(args.port, () => console.log(`Servidor corriendo en http://localhost:${args.port}`));

server.on("error", err => console.log(`Error en el servidor: ${err}`));