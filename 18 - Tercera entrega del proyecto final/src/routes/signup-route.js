const express = require("express");
const passport = require("passport");

const signupRouter = express.Router();

signupRouter.post("/",
    passport.authenticate("signup", { failureRedirect: "/signup" }),
    (req, res) => res.redirect("/")
);

module.exports = signupRouter;