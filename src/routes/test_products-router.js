import { Router } from "express";
import ApiTestMock from "../utils/products_gen.js";

const router = Router();
const data = new ApiTestMock();

router.get("/", (req, res) => {
    data.generar().then(data => res.json(data));
});

export default router;