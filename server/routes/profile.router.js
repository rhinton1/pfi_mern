import express from 'express';
import { addProfile, deleteProfile, healthCheck, listProfiles, updateProfile } from '../controllers/profile.controller.js';

const profileRouter = express.Router();

profileRouter.get('/healthcheck', healthCheck);
profileRouter.get('/create', addProfile);
profileRouter.get('/remove', deleteProfile);
profileRouter.get('/update', updateProfile);
profileRouter.get('/list', listProfiles);

export default profileRouter;
