import { Router } from 'express';
import { suppliersController } from '../controllers/suppliers.js';

const suppliersRouter = Router();

suppliersRouter.get('/suppliers', suppliersController);

export default suppliersRouter;
