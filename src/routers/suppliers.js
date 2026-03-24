import { Router } from 'express';
import {
  createSuppliersController,
  suppliersController,
  updateSuppliersController,
} from '../controllers/suppliers.js';

const suppliersRouter = Router();

suppliersRouter.get('/suppliers', suppliersController);
suppliersRouter.post('/suppliers', createSuppliersController);
suppliersRouter.put('/suppliers/:supplierId', updateSuppliersController);

export default suppliersRouter;
