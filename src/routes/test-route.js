import { Router } from "express";
import { 
    getProductsController, getProductController, postProductController, putProductController, deleteProductController
} from "../controllers/test-controller.js";

const testRouter = Router();;

testRouter.get("/", getProductsController)
testRouter.get("/:id", getProductController)
testRouter.post("/", postProductController)
testRouter.put("/:id", putProductController)
testRouter.delete("/:id", deleteProductController)

export default testRouter;