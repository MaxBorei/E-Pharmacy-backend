import { Router } from 'express';
import { getOrdersContoller } from '../controllers/orders.js';
import { authenticate } from '../middlewares/authenticate.js';

const ordersRouter = Router();

ordersRouter.use(authenticate);

ordersRouter.get('/orders', getOrdersContoller);

export default ordersRouter;
