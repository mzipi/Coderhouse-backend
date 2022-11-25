import { Router } from "express";
import logger from "../api/logger.js";
import passport from "passport";

const logoutRouter = Router();

logoutRouter.post("/", (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        logger.info("Logout successful");
        res.redirect('/');
    })
});

export default logoutRouter;