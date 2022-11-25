const { Router } = require("express");
const passport  = require("passport");
const logger = require("../api/logger.js");

const router = Router();

router.get("/", (req, res) => {
    res.render("login");
});

router.post(
    "/", 
    passport.authenticate("login", { failureRedirect: "/login" }), 
    (req, res) => {
        logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
        res.redirect("/");
    }
);

module.exports = router;