import { Router } from "express";
import { productDao } from "../daos/index.js";

const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
    const products = await productDao.getAll();
    res.json(products);
});

productsRouter.get("/:id", async ({ params }, res) => {
    const product = await productDao.getById(params.id);
    res.json(product);
});

productsRouter.post("/", async ({ body }, res) => {
    const product = await productDao.saveProduct(body);
    res.end();
});

productsRouter.put("/:id", async ({ params, body}, res) => {
    const product = await productDao.update(params.id, body);
    res.end();
});

productsRouter.delete("/:id", async ({ params }, res) => {
    const product = await productDao.delete(params.id);
    res.end();
});

export default productsRouter;