import { Router } from "express";
import { msgDao } from "../daos/index.js";

const router = Router();

router.get("/", (req, res) => {
    msgDao.getAll().then(n => res.send(n));
});

router.post("/", ({ body }, res) => {
    msgDao.save(body).then(res.end());
});

export default router;