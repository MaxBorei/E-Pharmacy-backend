import { SORT_ORDER } from '../constants/index.js';
import { Customer } from '../db/models/customers.js';
import { Order } from '../db/models/orders.js';
import { Product } from '../db/models/products.js';
import { Supplier } from '../db/models/suppliers.js';

export const getDashboard = async () => {
  const [
    allProducts,
    allSuppliers,
    allCustomers,
    recentCustomers,
    transactions,
  ] = await Promise.all([
    Product.countDocuments(),
    Supplier.countDocuments(),
    Customer.countDocuments(),
    getSortCustomers(),
    getSortOrders(),
  ]);

  const result = {
    allProducts,
    allSuppliers,
    allCustomers,
    recentCustomers,
    transactions,
  };

  return result;
};

const sortOrder = SORT_ORDER.DESC;
const sortByRegisterDate = 'register_date';
const limit = '5';
const getSortCustomers = async () => {
  const recentCustomers = await Customer.find()
    .sort({ [sortByRegisterDate]: sortOrder })
    .limit(limit)
    .exec();

  return recentCustomers;
};

const sortByOrderDate = 'order_date';
const getSortOrders = async () => {
  const transactions = await Order.find()
    .sort({ [sortByOrderDate]: sortOrder })
    .limit(limit)
    .exec();

  return transactions;
};
