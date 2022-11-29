import { Router } from "express";
import { negocioProducts } from "../negocio/NegocioProducts.js";

const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
    const products = await negocioProducts.getProducts();
    res.json(products);
});

productsRouter.get("/:id", async ({ params }, res) => {
    const product = await negocioProducts.getProduct(params);
    res.json(product);
});

productsRouter.post("/", async ({ body }, res) => {
    const product = await negocioProducts.addProduct(body);
    if(product === 1) return res.status(201);
});

productsRouter.put("/:id", ({ params, body}, res) => {
    const product = negocioProducts.updateProduct(params);
    if(product === 1) return res.status(201);
});

productsRouter.delete("/:id", ({ params }, res) => {
    const product = negocioProducts.deleteProduct(params);
    if(product === 1) return res.status(201);
});

export default productsRouter;