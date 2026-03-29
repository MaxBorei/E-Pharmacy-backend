import { Router } from 'express';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  userInfoController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { loginUserSchema, registerUserSchema } from '../validation/auth.js';
import { authenticate } from '../middlewares/authenticate.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerUserSchema),
  registerUserController,
);

authRouter.post('/login', validateBody(loginUserSchema), loginUserController);

authRouter.post('/refresh', refreshUserSessionController);

authRouter.post('/logout', authenticate, logoutUserController);

authRouter.get('/user-info', authenticate, userInfoController);

export default authRouter;
