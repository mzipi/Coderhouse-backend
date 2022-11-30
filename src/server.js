import express, { urlencoded, json } from "express";

import productsRouter from "./routes/api_products-route.js";
import index from "./routes/index-route.js";
import products from "./routes/products-route.js";
import msgRouter from "./routes/msg-route.js";
import login from "./routes/login-route.js";
import logout from "./routes/logout-route.js";
import signup from "./routes/signup-route.js";
import test from "./routes/test-route.js";
import fail_login from "./routes/fail_login-route.js";
import fail_signup from "./routes/fail_signup-route.js";
import info from "./routes/info-route.js";
import randoms from "./routes/api_randoms-route.js";
import all from "./routes/all-routes.js";

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
app.use("/", index);
app.use("/faillogin", fail_login);
app.use("/failsignup", fail_signup);
app.use("/info", info);
app.use("/login", login);
app.use("/logout", logout);
app.use("/productos", products)
app.use("/signup", signup);
app.use("/api/productos", productsRouter);
app.use("/api/mensajes", msgRouter);
app.use("/api/productos-test", test);
app.use("/api/randoms", randoms);
app.use("*", all);

export default app;