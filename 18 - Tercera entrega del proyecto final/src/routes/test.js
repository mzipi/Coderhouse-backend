const express = require("express");
const authMiddleware = require("../middlewares/auth-middleware");

const testRouter = express.Router();

testRouter.get("/", authMiddleware, (req, res) => {
    var user = req.user;
    console.log(user);
    res.send("<h1>Ruta ok!</h1>");
})

module.exports = testRouter;