import { SORT_ORDER } from '../constants/index.js';
import { Product } from '../db/models/products.js';

export const getAllProducts = async ({
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const mongoFilter = {};

  if (filter.name) {
    mongoFilter.name = new RegExp(filter.name, 'i');
  }

  const products = await Product.find(mongoFilter)
    .sort({ [sortBy]: sortOrder })
    .exec();

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

export const updateProduct = async (productId, payload, options = {}) => {
  const rawResult = await Product.findOneAndUpdate(
    { _id: productId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!rawResult || !rawResult.value) return null;

  return {
    product: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
