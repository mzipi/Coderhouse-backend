import { Router } from "express";
import passport from "passport";

const signupRouter = Router();

signupRouter.post("/",
    passport.authenticate("signup", { failureRedirect: "/signup" }),
    (req, res) => res.redirect("/")
);

export default signupRouter;