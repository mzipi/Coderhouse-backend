const express = require('express');
const router = express.Router();
const Contenedor = require('../cartClass');
const data = new Contenedor('cart.json');

router.get('/:id/productos', ({ params }, res) => {
    data.getById(params.id).then(n => res.send(n));
});

router.post('/', (req, res) => {
    data.newCart().then(res.end());
});

router.post('/:id/productos', ({ params, body }, res) => {
    data.add(params.id, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    data.deleteCart(params.id).then(res.end());
});

router.delete('/:id/productos/:id_prod', ({ params }, res) => {
    data.deleteItem(params.id, params.id_prod).then(res.end());
});

module.exports = router;