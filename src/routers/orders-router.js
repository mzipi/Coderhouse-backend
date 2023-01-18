import { Router } from 'express';
import { getProductsController, postProductController } from '../controllers/orders-controller.js';

const ordersRouter = new Router();

ordersRouter.get('/', getProductsController);
ordersRouter.post('/', postProductController);

export default ordersRouter;