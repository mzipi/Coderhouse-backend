import { Router } from "express";
import productsController from "../../controllers/products-controller.js";

const productsRouter = Router();

productsRouter.get("/", productsController);

export default productsRouter;