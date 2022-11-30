import { Router } from "express";
import { getMsgController, postMsgController, delMsgController } from "../controllers/msg-controller.js";

const msgRouter = new Router();

msgRouter.get("/", getMsgController);
msgRouter.post("/", postMsgController);
msgRouter.delete("/:id", delMsgController);

export default msgRouter;