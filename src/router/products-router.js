import { Router } from "express";
import { productDao } from "../daos/index.js";

const router = Router();

router.get("/", (req, res) => {
    productDao.getAll().then(n => res.send(n));
    // no hay productos
});

export default router;