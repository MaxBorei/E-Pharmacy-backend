import { Router } from 'express';
import {
  customerControllerById,
  customersController,
} from '../controllers/customers.js';

const customersRouter = Router();

customersRouter.get('/customers', customersController);

customersRouter.get('/customers/:customerId', customerControllerById);

export default customersRouter;
