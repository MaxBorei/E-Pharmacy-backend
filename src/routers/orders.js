import { Router } from 'express';
import { getOrdersContoller } from '../controllers/orders.js';

const ordersRouter = Router();

ordersRouter.get('/orders', getOrdersContoller);

export default ordersRouter;
