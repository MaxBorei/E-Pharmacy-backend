import { SORT_ORDER } from '../constants/index.js';
import { Supplier } from '../db/models/suppliers.js';
import { calculatePaginationData } from '../utils/parsePaginationParams.js';

export const getAllSuppliers = async ({
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
  const supplierQuery = Supplier.find(mongoFilter);
  const supplierCount = await Supplier.countDocuments(mongoFilter);

  const suppliers = await supplierQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(supplierCount, perPage, page);
  return {
    data: suppliers,
    ...paginationData,
  };
};

export const createSuppliers = async (payload) => {
  const { name, address, suppliers, date, amount, status } = payload;

  const newSupplier = await Supplier.create({
    name,
    address,
    suppliers,
    date,
    amount,
    status,
  });
  return newSupplier;
};

export const updateSupplier = async (supplierId, payload, options = {}) => {
  const result = await Supplier.findByIdAndUpdate(
    { _id: supplierId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!result || !result.value) return null;
  return {
    supplier: result.value,
    isNew: Boolean(result?.lastErrorObject?.upserted),
  };
};
