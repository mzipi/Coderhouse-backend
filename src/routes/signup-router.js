import { Router } from 'express';
import passport from 'passport';

import { postSignupController } from '../controllers/signup-controller.js';

const signupRouter = Router();

signupRouter.post('/', passport.authenticate('signup', { failureRedirect: '/login' }), postSignupController);

export default signupRouter;