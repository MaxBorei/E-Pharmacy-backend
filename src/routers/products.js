import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getProductsController,
  upsertProductController,
} from '../controllers/products.js';

const productsRouter = Router();

productsRouter.get('/products', getProductsController);
productsRouter.post('/products', createProductController);
productsRouter.delete('/products/:productId', deleteProductController);
productsRouter.put('/products/:productId', upsertProductController);

export default productsRouter;
