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
