const express = require('express');
const router = express.Router();
const Contenedor = require('../contenedor');
const data = new Contenedor('../public/productos.json');

// router.get('/', (req, res) => {
//     if(data.getAll()) {
//         res.render('add', { mensaje: data.getAll(), title: 'Todos los productos' })
//     } else {
//         res.render('no-products', { title: 'Todos los productos' });
//     }
// });

router.get('/:id?', ({ params }, res) => {
    if(params.id) {
        let obj = data.getById(params.id);
        res.render('add', { mensaje: obj });
    } else if(data.getAll()) {
        res.render('add', { mensaje: data.getAll() });
    } else {
        res.render('no-products');
    }
});

router.post('/', ({ body }, res) => {
    let obj = data.save(body);
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
        let obj = data.deleteById(params.id);
        res.render('products', { mensaje: obj, title: 'Producto eliminado' })
    } else {
        res.render('no-products', { title: 'Producto eliminado' });
    }
});

module.exports = router;