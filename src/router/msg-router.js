import { Router } from "express";
import { negocioMsg } from "../negocio/NegocioMsg.js";

const msgRouter = Router();

msgRouter.get("/", async (req, res) => {
    const messages = await negocioMsg.getMsgs();
    res.json(messages);
});

msgRouter.post("/", ({ body }, res) => {
    const newMsg = negocioMsg.sendMsg(body);
    if(newMsg === 1) res.status(201);
});

export default msgRouter;