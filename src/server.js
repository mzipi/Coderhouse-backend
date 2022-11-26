import express, { urlencoded, json } from "express";
import { engine } from "express-handlebars";

import sessionHandler from "./middlewares/session-middleware.js";
import { passportMiddleware, passportSessionHandler } from "./middlewares/passport-middleware.js";

import products from "./router/products-router.js";
import product_random from "./router/product_random-router.js";
import api_products from "./routes/api_products-router.js";
import index from "./routes/index-router.js";
import test_productos from "./routes/test_products-router.js";
import login from "./routes/login-router.js";
import logout from "./routes/logout-router.js";
import signup from "./routes/signup-router.js";
import fail_login from "./routes/fail_login-router.js";
import fail_signup from "./routes/fail_signup-router.js";
import info from "./routes/info-router.js";
import api_randoms from "./routes/api_randoms-router.js";
import all from "./routes/all-router.js";

const app = express();
let admin = false;

app.engine("handlebars", engine());

app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(urlencoded({extended: true}));
app.use(json());
app.use(sessionHandler);
app.use(passportMiddleware);
app.use(passportSessionHandler);
app.use(express.static('public'));

app.use("/productos", products);
app.use("/productoRandom", product_random);
app.use("/api/productos", api_products);
app.use("/", index);
app.use("/api/productos-test", test_productos);
app.use("/login", login);
app.use("/logout", logout);
app.use("/signup", signup);
app.use("/faillogin", fail_login);
app.use("/failsignup", fail_signup);
app.use("/info", info);
app.use("/api/randoms", api_randoms);
app.use("*", all);

export default app;