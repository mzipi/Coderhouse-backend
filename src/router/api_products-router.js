import { Router } from "express";
import { productDao } from "../daos/index.js";

const router = Router();

router.get("/", (req, res) => {
    productDao.getAll().then(n => res.send(n));
    // no hay productos
});

router.get("/:id", ({ params }, res) => {
    productDao.getById(params.id).then(n => res.send(n));
});

router.post("/", ({ body }, res) => {
    productDao.save(body).then(n => res.send(n));
});

router.put("/:id", ({ params, body}, res) => {
    productDao.update(params.id, body).then(res.end());
});

router.delete("/:id", ({ params }, res) => {
    productDao.delete(params.id).then(res.end());
});

export default router;