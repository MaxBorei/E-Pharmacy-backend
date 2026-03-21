import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import ordersRouter from './routers/orders.js';
import productsRouter from './routers/products.js';
import suppliersRouter from './routers/suppliers.js';
import customersRouter from './routers/customers.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(ordersRouter);
  app.use(productsRouter);
  app.use(suppliersRouter);
  app.use(customersRouter);

  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
};
