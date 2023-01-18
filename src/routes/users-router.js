import { Router } from 'express';
import { getProductsController, postProductController  } from '../controllers/users-controller.js';

const usersRouter = new Router();

usersRouter.get('/', getProductsController);
usersRouter.post('/', postProductController);

export default usersRouter;