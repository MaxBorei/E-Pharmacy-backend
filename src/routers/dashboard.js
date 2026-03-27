import { Router } from 'express';
import { getDashboardController } from '../controllers/dashboard.js';

const dashboardRouter = Router();

dashboardRouter.get('/dashboard', getDashboardController);

export default dashboardRouter;
