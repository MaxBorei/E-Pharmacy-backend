import { SORT_ORDER } from '../constants/index.js';
import { Product } from '../db/models/products.js';
import { calculatePaginationData } from '../utils/parsePaginationParams.js';

export const getAllProducts = async ({
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
  perPage,
  page,
}) => {
  const mongoFilter = {};
  const limit = perPage;
  const skip = (page - 1) * perPage;

  if (filter.name) {
    mongoFilter.name = new RegExp(filter.name, 'i');
  }
  const productQuery = Product.find(mongoFilter);
  const productCount = await Product.countDocuments(mongoFilter);

  const products = await productQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();
  const paginationData = calculatePaginationData(productCount, perPage, page);
  return {
    data: products,
    ...paginationData,
  };
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
