const express = require("express");

const unknownRouter = express.Router();

unknownRouter.get("/", (req, res) => res.status(404).json({ "ruta": "no implementada" }));

module.exports = unknownRouter;