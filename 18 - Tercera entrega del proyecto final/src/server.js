const express = require("express");
const handlebars = require("express-handlebars");
const products = require("./routes/products-route.js");
const cart = require("./routes/cart-route.js");
// const sessionHandler = require("./middlewares/session-middleware.js");
// const passportMiddleware = require("./middlewares/passport.js");

const app = express();
let admin = false;

app.engine("handlebars", handlebars.engine());

app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(sessionHandler);
// app.use(passportMiddleware);
app.use(express.static(__dirname + "/public"));
app.use("/api/productos", products);
app.use("/api/carrito", cart);

module.exports = app;