import createHttpError from 'http-errors';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
} from '../services/products.js';

export const productsController = async (req, res, next) => {
  try {
    const products = await getAllProducts();
    res.json({
      status: 200,
      message: 'Successfully found products!',
      data: products,
    });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(res, null, 2));
  } catch (err) {
    next(err);
  }
};

export const createProductController = async (req, res) => {
  const product = await createProduct(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a product!`,
    data: product,
  });
};

export const deleteProductController = async (req, res, next) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId);
  if (!product) {
    next(createHttpError(404, 'Product not found'));
    return;
  }

  res.status(204).send();
};
