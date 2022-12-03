import express, { urlencoded, json } from "express";

import productsRouter from "./api/routes/api_products-route.js";
import index from "./api/routes/root-route.js";
import products from "./api/routes/products-route.js";
import msgRouter from "./api/routes/msg-route.js";
import login from "./api/routes/login-route.js";
import logout from "./api/routes/logout-route.js";
import signup from "./api/routes/signup-route.js";
import test from "./api/routes/test-route.js";
import fail_login from "./api/routes/fail_login-route.js";
import fail_signup from "./api/routes/fail_signup-route.js";
import info from "./api/routes/info-route.js";
import randoms from "./api/routes/api_randoms-route.js";
import all from "./api/routes/all-routes.js";

import sessionHandler from "./middlewares/session-middleware.js";
import { passportMiddleware, passportSessionHandler } from "./middlewares/passport-middleware.js";

const app = express();

app.set('view engine', 'ejs');
app.set("views", "src/views");

app.use(urlencoded({extended: true}));
app.use(json());
app.use(sessionHandler);
app.use(passportMiddleware);
app.use(express.static('public'));
app.use("/api/productos", productsRouter);
app.use("/", index);
app.use("/productos", products);
app.use("/api/productos-test", test);
app.use("/login", login);
app.use("/logout", logout);
app.use("/signup", signup);
app.use("/faillogin", fail_login);
app.use("/failsignup", fail_signup);
app.use("/info", info);
app.use("/api/randoms", randoms);

app.use("/api/mensajes", msgRouter);
app.use("*", all);

export default app;