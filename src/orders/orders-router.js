import { Router } from 'express';
import { getProductsController, postProductController, putProductController, deleteProductController } from './orders-controller.js';

const ordersRouter = new Router();

ordersRouter.get('/', getProductsController);
ordersRouter.post('/', postProductController);
ordersRouter.put('/:id', putProductController);
ordersRouter.delete('/:id', deleteProductController);

export default ordersRouter;