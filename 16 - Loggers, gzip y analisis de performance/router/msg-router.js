const { Router } = require("express");
const Contenedor = require("../containers/messages-class.js");
const logger = require("../api/logger.js");

const router = Router();
const data = new Contenedor();

router.get("/", (req, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    data.getAll().then(n => res.send(n));
});

router.post("/", ({ body }, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    data.save(body).then(res.end());
});

module.exports = router;