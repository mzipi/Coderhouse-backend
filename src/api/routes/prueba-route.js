import { Router } from 'express';
import { getPruebaController, postPruebaController } from '../../controllers/prueba-controller.js';

const pruebaRouter = Router();

pruebaRouter.get('/', getPruebaController);
pruebaRouter.post('/', postPruebaController);

export default pruebaRouter;