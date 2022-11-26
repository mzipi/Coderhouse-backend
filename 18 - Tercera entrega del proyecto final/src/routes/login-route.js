import { Router } from "express";
import passport from "passport";

const loginRouter = Router();

loginRouter.post("/", 
    passport.authenticate("login", { failureRedirect: "/login" }),
    (req, res) => res.redirect("/")
);

export default loginRouter;