import { Router } from "express";
import { productsDao } from "../daos/index.js";

const router = Router();

router.get("/", (req, res) => {
    productsDao.getAll().then(n => res.json(n));
    // no hay productos
});

router.get("/:id", ({ params }, res) => {
    productsDao.getById(params.id).then(n => res.send(n));
});

router.post("/", ({ body }, res) => {
    productsDao.save(body).then(n => res.send(n));
});

router.put("/:id", ({ params, body}, res) => {
    productsDao.update(params.id, body).then(res.end());
});

router.delete("/:id", ({ params }, res) => {
    productsDao.delete(params.id).then(res.end());
});

export default router;