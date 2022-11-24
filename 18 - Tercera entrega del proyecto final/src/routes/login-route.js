const express = require("express");
const passport = require("passport");

const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
    if(req.isAuthenticated()) {
        res.send("Usuario logueado");
    } else {
        res.send("No se ha logueado")
    }
});

loginRouter.post("/", 
    passport.authenticate("login", { 
        failureRedirect: "/signup",
        successRedirect: "/"
    })
);

module.exports = loginRouter;