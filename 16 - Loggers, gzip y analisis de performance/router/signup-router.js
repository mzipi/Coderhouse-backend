const { Router } = require("express");
const passport  = require("passport");
const logger = require("../api/logger.js");

const router = Router();

router.get("/", (req, res) => {
    logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    res.render("signup", { msg: "Hasta luego", name: req.session.name });
});

router.post(
    "/", 
    passport.authenticate("signup", { failureRedirect: "/login" }), 
    (req, res) => {
        logger.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
        res.redirect("/");
    }
);

module.exports = router;