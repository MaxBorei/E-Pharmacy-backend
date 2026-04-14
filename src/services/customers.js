import { SORT_ORDER } from '../constants/index.js';
import { Customer } from '../db/models/customers.js';
import { calculatePaginationData } from '../utils/parsePaginationParams.js';

export const getCustomers = async ({
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
  const customerQuery = Customer.find(mongoFilter);
  const customerCount = await Customer.countDocuments(mongoFilter);

  const customers = await customerQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(customerCount, perPage, page);
  return {
    data: customers,
    ...paginationData,
  };
};

export const getCustomerById = async (customerId) => {
  const customer = await Customer.findById(customerId);
  return customer;
};
