import { Router } from "express";
import { getLoginController, postLoginController } from "../../controllers/login-controller.js";

const loginRouter = Router();

loginRouter.get("/", getLoginController);

loginRouter.post("/", postLoginController);

export default loginRouter;