import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getProductsController,
  upsertProductController,
} from '../controllers/products.js';
import { isValidId } from '../middlewares/isValidId.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../validation/products.js';
import { validateBody } from '../middlewares/validateBody.js';

const productsRouter = Router();

productsRouter.get('/products', getProductsController);

productsRouter.post(
  '/products',
  validateBody(createProductSchema),
  createProductController,
);

productsRouter.delete(
  '/products/:productId',
  isValidId('productId'),
  deleteProductController,
);

productsRouter.put(
  '/products/:productId',
  isValidId('productId'),
  validateBody(updateProductSchema),
  upsertProductController,
);

export default productsRouter;
