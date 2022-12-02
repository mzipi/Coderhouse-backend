import { Router } from "express";
import { productDao } from "../daos/index.js";

const router = Router();

router.get("/", (req, res) => {
    productDao.getAll();
    res.render("pages/products");
});

export default router;