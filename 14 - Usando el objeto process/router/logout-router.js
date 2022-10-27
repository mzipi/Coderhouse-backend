const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('logout', { msg: 'Hasta luego', name: req.session.name });
    req.session.destroy(err => { console.log(err) });
});

module.exports = router;