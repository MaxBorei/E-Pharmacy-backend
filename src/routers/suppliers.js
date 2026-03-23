import { Router } from 'express';
import {
  createSuppliersController,
  suppliersController,
} from '../controllers/suppliers.js';

const suppliersRouter = Router();

suppliersRouter.get('/suppliers', suppliersController);
suppliersRouter.post('/suppliers', createSuppliersController);

export default suppliersRouter;
