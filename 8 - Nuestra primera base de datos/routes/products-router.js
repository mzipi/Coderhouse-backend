const express = require('express');
const router = express.Router();
const options = require('../options/mariadb');
const Contenedor = require('../products-class');
const data = new Contenedor(options, 'products');

router.get('/', (req, res) => {
    data.getAll().then(n => res.send(n));
});

router.get('/:id', ({ params }, res) => {
    data.getById(params).then(n => res.send(n));
});

router.post('/', ({ body }, res) => {
    console.log(body);
    data.save(body).then(n => res.send(n));
});

router.put('/:id', ({ params, body}, res) => {
    data.update(params, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    data.delete(params).then(res.end());
});

module.exports = router;