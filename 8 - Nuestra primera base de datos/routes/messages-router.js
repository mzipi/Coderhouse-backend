const express = require('express');
const router = express.Router();
const options = require('../options/sqlite3');
const Contenedor = require('../messages-class');
const data = new Contenedor(options);

router.get('/', (req, res) => {
    data.getAll().then(n => res.send(n));
});

router.get('/:id', ({ params }, res) => {
    data.getById(params).then(n => res.send(n));
});

router.post('/', ({ body }, res) => {
    data.save(body).then(res.end());
});

router.put('/:id', ({ params, body}, res) => {
    data.update(params, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    data.delete(params).then(res.end());
});

module.exports = router;