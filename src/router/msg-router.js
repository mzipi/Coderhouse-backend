import { Router } from "express";
import Contenedor from "../containers/messages-class.js";

const router = Router();
const data = new Contenedor();

router.get("/", (req, res) => {
    data.getAll().then(n => res.send(n));
});

router.post("/", ({ body }, res) => {
    data.save(body).then(res.end());
});

export default router;