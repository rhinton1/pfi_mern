import express from 'express';
import { login, register } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.use('/register', register);
authRouter.use('/login', login);

export default authRouter;