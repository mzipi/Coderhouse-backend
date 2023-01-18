import { Router } from 'express';
import { getProductsController, postProductController, putProductController, deleteProductController } from '../controllers/users-controller.js';

const usersRouter = new Router();

usersRouter.get('/', getProductsController);
usersRouter.post('/', postProductController);
usersRouter.put('/:id', putProductController);
usersRouter.delete('/:id', deleteProductController);

export default usersRouter;