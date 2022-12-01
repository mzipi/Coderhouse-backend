import { Router } from "express";
import getProductsController from "../controllers/test-controller.js";

const testRouter = Router();;

testRouter.get("/", getProductsController);

export default testRouter;