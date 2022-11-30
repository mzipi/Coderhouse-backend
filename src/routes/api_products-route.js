import { Router } from "express";
import { 
    getProductsController, getProductController, postProductController, putProductController, deleteProductController
} from "../controllers/products-controller.js";

const productsRouter = new Router();

productsRouter.get("/", getProductsController);
productsRouter.get("/:id", getProductController);
productsRouter.post("/", postProductController);
productsRouter.put("/:id", putProductController);
productsRouter.delete("/:id", deleteProductController);

export default productsRouter;