import { Router } from 'express';
import { postLoginController } from '../controllers/login-controller.js';

const loginRouter = Router();

loginRouter.post('/', postLoginController);

export default loginRouter;