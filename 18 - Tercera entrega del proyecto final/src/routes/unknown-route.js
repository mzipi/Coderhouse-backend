import { Router } from "express";

const unknownRouter = Router();

unknownRouter.get("/", (req, res) => res.status(404).json({ ruta: req.baseUrl, msg: "no implementada" }));

export default unknownRouter;