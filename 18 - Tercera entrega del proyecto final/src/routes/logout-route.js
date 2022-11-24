import { Router } from "express";
import passport from "passport";

const logoutRouter = Router();

logoutRouter.post("/", (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/');
    })
});

export default logoutRouter;