import { Router } from 'express';
import {
  getCustomerControllerById,
  getCustomersController,
} from '../controllers/customers.js';
import { isValidId } from '../middlewares/isValidId.js';

const customersRouter = Router();

customersRouter.get('/customers', getCustomersController);

customersRouter.get(
  '/customers/:customerId',
  isValidId('customerId'),
  getCustomerControllerById,
);

export default customersRouter;
