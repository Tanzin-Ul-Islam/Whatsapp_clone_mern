import express from 'express';
import UserService from './user.service.js';
const router = express.Router();

router.get('/', UserService.getAllUser);

export default router;
