import { Router } from "express";
import { infoLog } from "../api/logger.js";

const router = Router();

router.all("*", (req, res, next) => {
    infoLog.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    next();
});

export default router;