import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getProductsController,
  upsertProductController,
} from '../controllers/products.js';
import { isValidId } from '../middlewares/isValidId.js';

const productsRouter = Router();

productsRouter.get('/products', getProductsController);
productsRouter.post('/products', createProductController);
productsRouter.delete(
  '/products/:productId',
  isValidId('productId'),
  deleteProductController,
);
productsRouter.put(
  '/products/:productId',
  isValidId('productId'),
  upsertProductController,
);

export default productsRouter;
