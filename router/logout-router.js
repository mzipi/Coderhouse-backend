const { Router } = require("express");
const logger = require("../api/logger.js");

const router = Router();

router.get("/", (req, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    res.render("logout", { msg: "Hasta luego", name: req.session.name });
    req.session.destroy(err => { console.log(err) });
});

module.exports = router;