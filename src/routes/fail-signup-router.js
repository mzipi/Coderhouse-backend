import { Router } from 'express';
import failSignupController from '../controllers/fail-signup-controller.js';

const failSignupRoute = Router();

failSignupRoute.get('/', failSignupController);

export default failSignupRoute;