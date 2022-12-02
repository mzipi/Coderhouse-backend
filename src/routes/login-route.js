import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/", (req, res) => {
    res.render("pages/login");
});

router.post(
    "/", 
    passport.authenticate("login", { failureRedirect: "/login" }), 
    (req, res) => {
        res.redirect("/");
    }
);

export default router;