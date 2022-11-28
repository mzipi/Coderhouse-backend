import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/", (req, res) => {
    res.render("signup", { msg: "Hasta luego", name: req.session.name });
});

router.post(
    "/", 
    passport.authenticate("signup", { failureRedirect: "/login" }), 
    (req, res) => {
        res.redirect("/");
    }
);

export default router;