import { getCustomerById, getCustomers } from '../services/customers.js';
import createHttpError from 'http-errors';
import { parsedName } from '../utils/parseFilterParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { customersFields } from '../constants/index.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getCustomersController = async (req, res, next) => {
  try {
    const { sortBy, sortOrder } = parseSortParams(req.query, customersFields);
    const filter = parsedName(req.query);
    const { perPage, page } = parsePaginationParams(req.query);

    const customers = await getCustomers({
      sortBy,
      sortOrder,
      filter,
      perPage,
      page,
    });

    res.json({
      status: 200,
      message: 'Successfully found customers!',
      data: customers,
    });
  } catch (err) {
    next(err);
  }
};

export const getCustomerControllerById = async (req, res, next) => {
  const { customerId } = req.params;
  const customer = await getCustomerById(customerId);
  if (!customer) {
    throw createHttpError(404, 'Customer not found');
  }

  res.json({
    status: 200,
    message: `Successfully found student with id ${customerId}!`,
    data: customer,
  });
};
