import { Router } from "express";
import { getMsgController, postMsgController } from "../controllers/msg-controller.js";

const msgRouter = new Router();

msgRouter.get("/", getMsgController) 

msgRouter.post("/", postMsgController)

export default msgRouter;