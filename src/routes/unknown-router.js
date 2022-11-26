import { Router } from "express";

const router = Router();

router.all("/", (req, res) => {
    res.status(404).json({
        ruta: req.baseUrl, 
        msg: "no implementada"
    })
});

export default router;