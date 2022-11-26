import { Router } from "express";
import { cartDao } from "../daos/index.js";

const cartRouter = Router();

cartRouter.get("/:id/productos", async ({ params }, res) => {
    const product = await cartDao.getById(params.id);
    res.json(product);
});

cartRouter.post("/", async (req, res) => {
    const cart = await cartDao.newCart();
    res.end();
});

cartRouter.post("/:id/productos", async ({ params, body }, res) => {
    const product = await cartDao.saveCart(params.id, body);
    res.end();
});

cartRouter.delete("/:id", async ({ params }, res) => {
    const product = await cartDao.delete(params.id);
    res.end();
});

cartRouter.delete("/:id/productos/:id_prod", async ({ params }, res) => {
    const cart = await cartDao.deleteItem(params.id, params.id_prod);
    res.end();
});

export default cartRouter;