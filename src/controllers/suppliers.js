import createHttpError from 'http-errors';
import {
  createSuppliers,
  getAllSuppliers,
  updateSupplier,
} from '../services/suppliers.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parsedName } from '../utils/parseFilterParams.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { supplierFields } from '../constants/index.js';

export const suppliersController = async (req, res, next) => {
  try {
    const { sortBy, sortOrder } = parseSortParams(req.query, supplierFields);
    const fiter = parsedName(req.query);
    const { page, perPage } = parsePaginationParams(req.query);

    const suppliers = await getAllSuppliers({
      sortBy,
      sortOrder,
      fiter,
      page,
      perPage,
    });

    res.json({
      status: 200,
      message: 'Successfully found suppliers!',
      data: suppliers,
    });
  } catch (err) {
    next(err);
  }
};

export const createSuppliersController = async (req, res, next) => {
  try {
    const result = await createSuppliers(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateSuppliersController = async (req, res, next) => {
  const { supplierId } = req.params;
  const resultSupplier = await updateSupplier(supplierId, req.body, {
    upsert: true,
  });

  if (!resultSupplier) {
    next(createHttpError(404, 'Supplier not found'));
    return;
  }
  const status = resultSupplier.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: 'Successfully upserted a supplier!',
    data: resultSupplier.supplier,
  });
};
