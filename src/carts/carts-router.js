import { Router } from 'express';
import { getProductsController, postProductController, putProductController, deleteProductController } from './carts-controller.js';

const cartsRouter = new Router();

cartsRouter.get('/', getProductsController);
cartsRouter.post('/', postProductController);
cartsRouter.put('/:id', putProductController);
cartsRouter.delete('/:id', deleteProductController);

export default cartsRouter;