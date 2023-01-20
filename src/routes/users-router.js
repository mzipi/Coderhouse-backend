import { Router } from 'express';
import passport from 'passport';

import { getUsersController, postUsersController  } from '../controllers/users-controller.js';

const usersRouter = new Router();

usersRouter.get('/', getUsersController);
usersRouter.post('/', passport.authenticate('signup', { session: false }), postUsersController);

export default usersRouter;