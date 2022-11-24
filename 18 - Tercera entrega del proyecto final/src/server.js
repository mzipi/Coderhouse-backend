const express = require("express");
const session = require("./middlewares/session-middleware.js");
const { passportMiddleware, passportSessionHandler } = require("./middlewares/passport-middleware.js");
const products = require("./routes/products-route.js");
const cart = require("./routes/cart-route.js");
const login = require("./routes/login-route.js");
const signup = require("./routes/signup-route.js");
const logout = require("./routes/logout-route.js");
const unknown = require("./routes/unknown-route.js");

const app = express();
let admin = false;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(session);
app.use(passportMiddleware);
app.use(passportSessionHandler);
app.use("/api/productos", products);
app.use("/api/carrito", cart);
app.use("/login", login);
app.use("/signup", signup);
app.use("/logout", logout);
app.use("*", unknown);

module.exports = app;