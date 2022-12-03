import { Router } from "express";
import randomController from "../../controllers/random-controller.js";

const router = Router();

router.get("/:cant?", (randomController));

export default router;