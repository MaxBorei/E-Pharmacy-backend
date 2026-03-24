import createHttpError from 'http-errors';
import {
  createSuppliers,
  getAllSuppliers,
  updateSupplier,
} from '../services/suppliers.js';

export const suppliersController = async (req, res, next) => {
  try {
    const suppliers = await getAllSuppliers();
    res.json({
      status: 200,
      message: 'Successfully found suppliers!',
      data: suppliers,
    });

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(res, null, 2));
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
