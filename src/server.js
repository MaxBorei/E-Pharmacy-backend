import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import ordersRouter from './routers/orders.js';
import productsRouter from './routers/products.js';
import suppliersRouter from './routers/suppliers.js';
import customersRouter from './routers/customers.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import dashboardRouter from './routers/dashboard.js';
import authRouter from './routers/auth.js';
import cookieParser from 'cookie-parser';

const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(
    cors({
      origin: [
        'http://localhost:5173',
        'https://https://pharmacy-admin-dashboard-eta.vercel.app',
      ],
      credentials: true,
    }),
  );
  app.use(cookieParser());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(authRouter);
  app.use(ordersRouter);
  app.use(productsRouter);
  app.use(suppliersRouter);
  app.use(customersRouter);
  app.use(dashboardRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
};
