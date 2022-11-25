const { Router } = require("express");
const ApiTestMock = require("../utils/ProductsGenerator.js");
const logger = require("../api/logger.js");

const router = Router();
const data = new ApiTestMock();

router.get("/", (req, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    res.render("test", {
        products: data.getAll()
    })
});

router.get("/:id", ({ params }, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    data.getById(params).then(n => res.send(n));
});

router.post("/", ({ body }, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    // data.generar().then(n => res.send(n));
    res.send(data.generar());
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