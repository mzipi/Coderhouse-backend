import { Router } from 'express';
import { getProductsController, postProductController } from '../../controllers/products-controller.js';

const productsRouter = new Router();

productsRouter.get('/', getProductsController);
productsRouter.post('/', postProductController);

export default productsRouter;