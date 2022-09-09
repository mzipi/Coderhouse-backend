const express = require('express');
const router = express.Router();
const Contenedor = require('../contenedor');
const data = new Contenedor('products.json');

router.get('/:id?', ({ params }, res) => {
    if(params.id) {
        data.getById(params.id).then(res.end());
    } else {
        data.getAll().then(res.end());
    }
});

router.post('/', ({ body }, res) => {
    data.save(body).then(res.end());
});

router.put('/:id', ({ params, body}, res) => {
    data.update(params.id, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    data.deleteById(params.id).then(res.end());
});

module.exports = router;