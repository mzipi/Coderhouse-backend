import { Router } from 'express';
import { getProductsController, postProductController, deleteProductController } from '../controllers/carts-controller.js';

const cartsRouter = new Router();

cartsRouter.get('/', getProductsController);
cartsRouter.post('/', postProductController);
cartsRouter.delete('/:id', deleteProductController);

export default cartsRouter;