const express = require('express');
const router = express.Router();
const Contenedor = require('../contenedor.js');
const data = new Contenedor(`${__dirname}/../public/products.txt`);

router.get('/', (req, res) => res.render('index', { title: "Lista de productos"}));

router.post('/', ({ body }, res) => {
    data.save(body).then(res.end());
});

module.exports = router;