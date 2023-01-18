import { Router } from 'express';
import { postLoginController } from '../app/controllers/load-images-controller.js';

const loginRouter = Router();

loginRouter.post('/', postLoginController);

export default loginRouter;