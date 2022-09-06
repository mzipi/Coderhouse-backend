const express = require('express');
const router = express.Router();
const ContenedorMemoria = require('../contenedor');
const data = new ContenedorMemoria();

router.get('/', (req, res) => {
    if(data.getAll().length > 0) {
        res.render('pages/products', { mensaje: data.getAll(), titulo: 'Todos los productos' });
    } else {
        res.render('pages/no-products', { titulo: 'Todos los productos' });
    }
});

router.get('/:id', ({ params }, res) => {
    if(data.getAll().length > 0) {
        let obj = data.getOne(params.id)
        res.render('pages/products', { mensaje: obj, titulo: 'Vista del producto'});
    } else {
        res.render('pages/no-products', { titulo: 'Todos los productos' });
    }
});

router.post('/', ({ body }, res) => {
    let obj = data.addOne(body)
    res.render('pages/products', { mensaje: [obj], titulo: "Producto agregado" })
});

router.put('/:id', ({ params, body}, res) => {
    if(data.getAll().length > 0) {
        let arr = data.updateOne(params.id, body);
        res.render('pages/products', { mensaje: arr, titulo: "Producto actualizado"})
    } else {
        res.render('pages/no-products', { titulo: 'Todos los productos' });
    }
});

router.delete('/:id', ({ params }, res) => {
    if(data.getAll().length > 0) {
        let obj = data.deleteOne(params.id);
        res.render('pages/products', { mensaje: obj, titulo: 'Producto eliminado' })
    } else {
        res.render('pages/no-products', { titulo: 'Todos los productos' });
    }
});

module.exports = router;