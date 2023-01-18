import { Router } from 'express';
import { getProductsController, postProductController, putProductController, deleteProductController } from './products-controller.js';

const productsRouter = new Router();

productsRouter.get('/', getProductsController);
productsRouter.post('/', postProductController);
productsRouter.put('/:id', putProductController);
productsRouter.delete('/:id', deleteProductController);

export default productsRouter;