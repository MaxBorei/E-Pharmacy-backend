import { Supplier } from '../db/models/suppliers.js';

export const getAllSuppliers = async () => {
  const suppliers = await Supplier.find();
  return suppliers;
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
