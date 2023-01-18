import { Router } from 'express';
import { getSignupController, postSignupController } from './signup-controller.js';

const signupRouter = Router();

signupRouter.get('/', getSignupController);

signupRouter.post('/', postSignupController);

export default signupRouter;