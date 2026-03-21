import { Router } from 'express';
import { ordersContoller } from '../controllers/orders.js';

const ordersRouter = Router();

ordersRouter.get('/orders', ordersContoller);

export default ordersRouter;
