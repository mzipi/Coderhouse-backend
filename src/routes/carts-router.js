import { Router } from 'express';
import { getCartController, postCartController, deleteCartController } from '../controllers/carts-controller.js';

const cartsRouter = new Router();

cartsRouter.get('/', getCartController);
cartsRouter.post('/', postCartController);
cartsRouter.delete('/:id', deleteCartController);

export default cartsRouter;