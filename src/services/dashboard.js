import { Customer } from '../db/models/customers.js';
import { Product } from '../db/models/products.js';
import { Supplier } from '../db/models/suppliers.js';

export const getDashboard = async () => {
  const [allProducts, allSuppliers, allCustomers] = await Promise.all([
    Product.countDocuments(),
    Supplier.countDocuments(),
    Customer.countDocuments(),
  ]);

  const result = {
    allProducts,
    allSuppliers,
    allCustomers,
  };

  return result;
};
