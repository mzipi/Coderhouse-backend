const express = require("express");
const passport = require("passport");

const signupRouter = express.Router();

signupRouter.post("/",
    passport.authenticate("signup", { 
        failureRedirect: "/signup",
        successRedirect: "/login"
    }),
);

module.exports = signupRouter;