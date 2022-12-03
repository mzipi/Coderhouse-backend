import { Router } from 'express';
import allController from '../../controllers/all-controller.js';

const router = Router();

router.all('*', allController);

export default router;