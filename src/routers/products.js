import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  productsController,
  upsertProductController,
} from '../controllers/products.js';

const productsRouter = Router();

productsRouter.get('/products', productsController);
productsRouter.post('/products', createProductController);
productsRouter.delete('/products/:productId', deleteProductController);
productsRouter.put('/products/:productId', upsertProductController);

export default productsRouter;
