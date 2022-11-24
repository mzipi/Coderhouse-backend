const passport = require("passport");

function authMiddleware(req, res, next) {
    if(req.isAuthenticated()) {
        next();
    } else { res.redirect("/login") }
}

module.exports = authMiddleware;