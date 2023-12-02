import express from 'express';
import { addUser, deleteUser, healthCheck, listUsers, updateUser } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/healthcheck', healthCheck);
userRouter.get('/remove', deleteUser);
userRouter.get('/create', addUser);
userRouter.get('/update', updateUser);
userRouter.get('/list', listUsers);

export default userRouter;