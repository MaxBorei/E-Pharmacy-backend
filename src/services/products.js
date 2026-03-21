import { Product } from '../db/models/products.js';

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};
