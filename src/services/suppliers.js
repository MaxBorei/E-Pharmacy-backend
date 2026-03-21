import { Supplier } from '../db/models/suppliers.js';

export const getAllSuppliers = async () => {
  const suppliers = await Supplier.find();
  return suppliers;
};
