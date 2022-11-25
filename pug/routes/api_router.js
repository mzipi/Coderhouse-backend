const express = require('express');
const router = express.Router();
const ContenedorMemoria = require('../contenedor');
const data = new ContenedorMemoria();

router.get('/', (req, res) => {
    if(data.getAll().length > 0) {
        res.render('products.pug', { mensaje: data.getAll(), titulo: 'Todos los productos' })
    } else {
        res.render('no-products.pug', { titulo: 'Todos los productos' });
    }
});

router.get('/:id', ({ params }, res) => {
    if(data.getAll().length > 0) {
        let obj = data.getOne(params.id)
        res.render('products.pug', { mensaje: obj, titulo: 'Vista del producto'});
    } else {
        res.render('no-products.pug', { titulo: 'Vista del producto' });
    }
});

router.post('/', ({ body }, res) => {
    let obj = data.addOne(body)
    res.render('products.pug', { mensaje: [obj], titulo: "Producto agregado" })
});

router.put('/:id', ({ params, body}, res) => {
    if(data.getAll().length > 0) {
        let arr = data.updateOne(params.id, body);
        res.render('products.pug', { mensaje: arr, titulo: "Producto actualizado"})
    } else {
        res.render('no-products.pug', { titulo: "Producto actualizado"});
    }
});

router.delete('/:id', ({ params }, res) => {
    if(data.getAll().length > 0) {
        let obj = data.deleteOne(params.id);
        res.render('products.pug', { mensaje: obj, titulo: 'Producto eliminado' })
    } else {
        res.render('no-products.pug', { titulo: 'Producto eliminado' });
    }
});

module.exports = router;