import { Router } from "express";
import { getSignupController, postSignupController } from "../controllers/signup-Controller.js";

const signupRouter = Router();

signupRouter.get("/", getSignupController);

signupRouter.post("/", postSignupController);

export default signupRouter;