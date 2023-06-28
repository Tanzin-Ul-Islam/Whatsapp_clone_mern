import express from 'express';
import AuthService from './auth.service.js';
const router = express.Router();

router.post('/sign-in', AuthService.signIn);

export default router;
