const express = require('express');
const router = express.Router();
const Contenedor = require('../contenedor');
const data = new Contenedor('productos.txt');

router.get('/:id/productos', ({ params }, res) => {
    if(data.getAll().length > 0) {
        let obj = data.getById(params.id)
        res.render('products', { mensaje: obj, title: 'Vista del producto'});
    } else {
        res.render('no-products', { title: 'Vista del producto' });
    }
});

router.post('/', (req, res) => {});

router.post('/:id/productos', ({ body }, res) => {
    let obj = data.save(body)
    res.render('products', { mensaje: [obj], title: "Producto agregado" })
});

router.delete('/:id', (req, res) => {});

router.delete('/:id/productos/:id_prod', ({ params }, res) => {
    if(data.getAll().length > 0) {
        let obj = data.deleteById(params.id);
        res.render('products', { mensaje: obj, title: 'Producto eliminado' })
    } else {
        res.render('no-products', { title: 'Producto eliminado' });
    }
});

module.exports = router;