import { Router } from 'express';
import failSignupController from './fail-signup-controller.js';

const failSignupRoute = Router();

failSignupRoute.get('/', failSignupController);

export default failSignupRoute;