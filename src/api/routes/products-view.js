import { Router } from 'express';
import { getProductsController } from '../../controllers/productsView-controller.js';

const productsRouter = new Router();

productsRouter.get('/', getProductsController);

export default productsRouter;