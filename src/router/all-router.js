import { Router } from "express";
import logger from "../api/logger.js";

const router = Router();

router.all("*", (req, res, next) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    logger.warn(`URL: ${req.originalUrl} - Method: ${req.method}`);
    next();
});

export default router;