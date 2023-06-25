import express from 'express';
import MessageService from './message.service.js';
const router = express.Router();

router.post('/', MessageService.createMessage);

export default router;
