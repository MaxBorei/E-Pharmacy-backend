import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  productsController,
} from '../controllers/products.js';

const productsRouter = Router();

productsRouter.get('/products', productsController);
productsRouter.post('/products', createProductController);
productsRouter.delete('/products/:productId', deleteProductController);

export default productsRouter;
