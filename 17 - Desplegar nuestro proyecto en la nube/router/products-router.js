const { Router } = require("express");
const options = require("../options/mariadb.js");
const Contenedor = require("../containers/products-class.js");

const router = Router();
const data = new Contenedor(options, "products");

router.get("/", (req, res) => {
    data.getAll().then(n => res.send(n));
    // no hay productos
});

router.get("/:id", ({ params }, res) => {
    // data.getById(params).then(n => res.send(n));
    console.log(params);
    res.end();
});

router.post("/", ({ body }, res) => {
    data.save(body).then(n => res.send(n));
});

router.put("/:id", ({ params, body}, res) => {
    data.update(params, body).then(res.end());
});

router.delete("/:id", ({ params }, res) => {
    data.delete(params).then(res.end());
});

module.exports = router;