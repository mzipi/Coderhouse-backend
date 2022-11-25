const { Router } = require("express");
const logger = require("../api/logger.js");

const router = Router();

router.all("*", (req, res, next) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    logger.warn(`URL: ${req.originalUrl} - Method: ${req.method}`);
    next();
});

module.exports = router;