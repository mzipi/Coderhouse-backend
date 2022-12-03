import { Router } from "express";
import infoController from "../../controllers/info-controller.js";
import compression from "compression";

const infoRouter = Router();

infoRouter.get("/", compression(), infoController);

export default infoRouter;