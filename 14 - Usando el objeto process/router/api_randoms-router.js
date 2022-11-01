const { Router } = require("express");
const { fork } = require("child_process");

const router = Router();


router.get("/:cant?", (req, res) => {
    
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