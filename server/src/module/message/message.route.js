import express from 'express';
import MessageService from './message.service.js';
const router = express.Router();

router.post('/', MessageService.createMessage);
router.get('/', MessageService.getMessage);

export default router;
