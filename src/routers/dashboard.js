import { Router } from 'express';
import { getDashboardController } from '../controllers/dashboard.js';
import { authenticate } from '../middlewares/authenticate.js';

const dashboardRouter = Router();

dashboardRouter.use(authenticate);

dashboardRouter.get('/dashboard', getDashboardController);

export default dashboardRouter;
