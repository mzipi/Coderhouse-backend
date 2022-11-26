import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    // res.render("index");
    res.sendFile('main.html', { root: 'src/views' })
});

export default router;