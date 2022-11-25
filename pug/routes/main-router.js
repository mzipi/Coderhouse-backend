const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('form.pug', { titulo: "Agregar producto" }))

module.exports = router;