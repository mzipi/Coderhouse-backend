const express = require('express');
const router = express.Router();
const options = require('../options/sqlite3');
const Contenedor = require('../messages-class');
const data = new Contenedor(options, 'messages');

router.get('/', (req, res) => {
    data.getAll().then(n => res.send(n));
});

router.post('/', ({ body }, res) => {
    data.save(body).then(res.end());
});

module.exports = router;