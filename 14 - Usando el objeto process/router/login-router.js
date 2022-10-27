const { Router } = require('express');
const passport  = require("passport");

const router = Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post(
    '/', 
    passport.authenticate('login', { failureRedirect: '/login' }), 
    (req, res) => {
        res.redirect('/');
    }
);

module.exports = router;