const { Router } = require("express");
const logger = require("../api/logger.js");

const router = Router();

router.get("/", (req, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    res.render("fail-register");
});

module.exports = router;