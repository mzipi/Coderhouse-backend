import { Router } from "express";
import { cartDao } from "../daos/index.js";

const cartRouter = Router();

cartRouter.get("/:id/productos", async ({ params }, res) => {
    cartDao.getById(params.id).then(n => res.send(n));
});

cartRouter.post("/", async (req, res) => {
    cartDao.newCart().then(res.end());
});

cartRouter.post("/:id/productos", async ({ params, body }, res) => {
    cartDao.add(params.id, body).then(res.end());
});

cartRouter.delete("/:id", async ({ params }, res) => {
    cartDao.deleteCart(params.id).then(res.end());
});

cartRouter.delete("/:id/productos/:id_prod", async ({ params }, res) => {
    cartDao.deleteItem(params.id, params.id_prod).then(res.end());
});

export default cartRouter;