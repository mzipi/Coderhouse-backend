import express, { json, urlencoded } from "express";
import session from "./middlewares/session-middleware.js";
import { passportMiddleware, passportSessionHandler } from "./middlewares/passport-middleware.js";
import products from "./routes/products-route.js";
import cart from "./routes/cart-route.js";
import login from "./routes/login-route.js";
import signup from "./routes/signup-route.js";
import logout from "./routes/logout-route.js";
import unknown from "./routes/unknown-route.js";

const app = express();
let admin = false;

app.use(json());
app.use(urlencoded({extended: true}));
app.use(express.static('public'));
app.use(session);
app.use(passportMiddleware);
app.use(passportSessionHandler);
app.use("/api/productos", products);
app.use("/api/carrito", cart);
app.use("/login", login);
app.use("/signup", signup);
app.use("/logout", logout);
app.use("*", unknown);

export default app;