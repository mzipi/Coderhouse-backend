const { Router } = require("express");
const { fork } = require("child_process");

const router = Router();

const computo = fork('./computo.js')
computo.on('message', msg => {
    if (msg === 'listo') {
        computo.send('calcular!')
    } else {
        res.end(`La suma es ${msg}`)
    }
})

router.get("/", (req, res) => {
    res.render("api-randoms");
});

module.exports = router;