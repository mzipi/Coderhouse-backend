const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('fail-login');
});

module.exports = router;