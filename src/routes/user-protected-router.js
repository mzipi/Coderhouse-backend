import { Router } from 'express';
import passport from 'passport';

import userProtectedController from '../controllers/user-protected-controller.js';

const userProtectedRouter = new Router();

userProtectedRouter.get("/", passport.authenticate("jwt", { session: false }), userProtectedController);

export default userProtectedRouter;