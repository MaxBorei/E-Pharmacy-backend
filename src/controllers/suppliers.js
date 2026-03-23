import { createSuppliers, getAllSuppliers } from '../services/suppliers.js';

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
