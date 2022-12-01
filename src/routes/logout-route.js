import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    req.session.destroy(err => { console.log(err) });
    res.render("pages/logout");
});

export default router;