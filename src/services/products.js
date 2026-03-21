import { Product } from '../db/models/products.js';

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const createProduct = async (payload) => {
  const product = await Product.create(payload);
  return product;
};

export const deleteProduct = async (productId) => {
  const product = await Product.findOneAndDelete({
    _id: productId,
  });

  return product;
};
