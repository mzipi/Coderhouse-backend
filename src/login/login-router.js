import { Router } from 'express';
import { getLoginController, postLoginController } from './login-controller.js';

const loginRouter = Router();

loginRouter.get('/', getLoginController);

loginRouter.post('/', postLoginController);

export default loginRouter;