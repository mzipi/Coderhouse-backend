import { Router } from 'express';
import failLoginController from '../app/controllers/fail-login-controller.js';

const failLoginRouter = Router();

failLoginRouter.get('/', failLoginController);

export default failLoginRouter;