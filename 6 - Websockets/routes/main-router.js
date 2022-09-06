const express = require('express');
const router = express.Router();
const ContenedorMemoria = require('../contenedor');
const data = new ContenedorMemoria();

// router.get('/', (req, res) => res.render('form'));
router.get('/', (req, res) => res.render('form', { mensaje: data.getAll() }));

module.exports = router;