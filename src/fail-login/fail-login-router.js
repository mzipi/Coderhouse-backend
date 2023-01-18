import { Router } from 'express';
import failLoginController from './fail-login-controller.js';

const failLoginRouter = Router();

failLoginRouter.get('/', failLoginController);

export default failLoginRouter;