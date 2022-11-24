import { Router } from "express";
import { productDao } from "../daos/index.js";

const productsRouter = Router();

productsRouter.get("/:id?", ({ params }, res) => {
    if(params.id) {
        productDao.getById(params.id).then(n => res.json(n));
    } else {
        productDao.getAll().then(n => res.json(n));
    };
});

productsRouter.post("/", ({ body }, res) => {
    productDao.save(body).then(res.end());
});

productsRouter.put("/:id", ({ params, body}, res) => {
    productDao.update(params.id, body).then(res.end());
});

productsRouter.delete("/:id", ({ params }, res) => {
    productDao.deleteById(params.id).then(res.end());
});

export default productsRouter;