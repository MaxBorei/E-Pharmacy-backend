import { Router } from 'express';
import {
  createSuppliersController,
  suppliersController,
  updateSuppliersController,
} from '../controllers/suppliers.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { supplierSchemaValidation } from '../validation/suppliers.js';

const suppliersRouter = Router();

suppliersRouter.get('/suppliers', suppliersController);

suppliersRouter.post(
  '/suppliers',
  validateBody(supplierSchemaValidation),
  createSuppliersController,
);

suppliersRouter.put(
  '/suppliers/:supplierId',
  isValidId('supplierId'),
  validateBody(supplierSchemaValidation),
  updateSuppliersController,
);

export default suppliersRouter;
