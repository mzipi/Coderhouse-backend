const express = require('express');
const router = express.Router();
const ContenedorMemoria = require('../contenedor');
const data = new ContenedorMemoria();

router.get('/', (req, res) => {
    if(data.getAll().length > 0) {
        res.render('products', { mensaje: data.getAll(), title: 'Todos los productos' })
    } else {
        res.render('no-products', { title: 'Todos los productos' });
    }
});

router.get('/:id', ({ params }, res) => {
    if(data.getAll().length > 0) {
        let obj = data.getOne(params.id)
        res.render('products', { mensaje: obj, title: 'Vista del producto'});
    } else {
        res.render('no-products', { title: 'Vista del producto' });
    }
});

router.post('/', ({ body }, res) => {
    let obj = data.addOne(body)
    res.render('products', { mensaje: [obj], title: "Producto agregado" })
});

router.put('/:id', ({ params, body}, res) => {
    if(data.getAll().length > 0) {
        let arr = data.updateOne(params.id, body);
        res.render('products', { mensaje: arr, title: "Producto actualizado"})
    } else {
        res.render('no-products', { title: "Producto actualizado" });
    }
});

router.delete('/:id', ({ params }, res) => {
    if(data.getAll().length > 0) {
        let obj = data.deleteOne(params.id);
        res.render('products', { mensaje: obj, title: 'Producto eliminado' })
    } else {
        res.render('no-products', { title: 'Producto eliminado' });
    }
});

module.exports = router;