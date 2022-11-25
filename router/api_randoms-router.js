const { Router } = require("express");
const { fork } = require("child_process");
const logger = require("../api/logger.js");

const router = Router();


router.get("/:cant?", (req, res) => {

    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    
    let cant;

    if(req.query.cant) {
        cant = Number(req.query.cant);
    } else {
        cant = 100000;
    }

    const child = fork("./api/child.js");

    child.send(cant);

    child.on("message", msg => res.send({ num: msg }));
});

module.exports = router;