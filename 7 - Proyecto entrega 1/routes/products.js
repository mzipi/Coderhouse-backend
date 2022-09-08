const express = require('express');
const router = express.Router();
const Contenedor = require('../contenedor');
const data = new Contenedor('products.json');

router.get('/:id?', ({ params }, res) => {
    if(params.id) {
        data.getById(params.id)
            .then(n => res.render('products', {titulo: 'Un producto', mensaje: n}));
    } else {
        data.getAll()
            .then(n => res.render('products', { titulo: 'Todos los productos', mensaje: n}));
    }
});

router.post('/', ({ body }, res) => {
    data.save(body)
        .then(n => res.render('products', { titulo: 'Producto agregado', mensaje: n}));
});

router.put('/:id', ({ params, body}, res) => {
    data.update(params.id, body)
        .then(n => res.render('products', { titulo: 'Producto actualizado', mensaje: n}));
});

router.delete('/:id', ({ params }, res) => {
    data.deleteById(params.id)
        .then(n => res.render('products', { titulo: 'Producto borrado', mensaje: n}));
});

module.exports = router;