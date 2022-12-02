import { Router } from "express";
import failLoginController from "../controllers/fail_login-controller.js";

const failLoginRoute = Router();

failLoginRoute.get("/", failLoginController);

export default failLoginRoute;