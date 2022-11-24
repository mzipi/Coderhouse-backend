const express = require("express");
const passport = require("passport");

const loginRouter = express.Router();

loginRouter.post("/", 
    passport.authenticate("login", { failureRedirect: "/login" }),
    (req, res) => res.redirect("/")
);

module.exports = loginRouter;