import { getAllProducts } from '../services/products.js';

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
