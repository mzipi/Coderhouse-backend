const { Router } = require("express");
const options = require("../options/mariadb.js");
const Contenedor = require("../containers/products-class.js");
const logger = require("../api/logger.js");

const router = Router();
const data = new Contenedor(options, "products");

router.get("/", (req, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    data.getAll().then(n => res.send(n));
    // no hay productos
});

router.get("/:id", ({ params }, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    data.getById(params).then(n => res.send(n));
});

router.post("/", ({ body }, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    data.save(body).then(n => res.send(n));
});

router.put("/:id", ({ params, body}, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    data.update(params, body).then(res.end());
});

router.delete("/:id", ({ params }, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    data.delete(params).then(res.end());
});

module.exports = router;