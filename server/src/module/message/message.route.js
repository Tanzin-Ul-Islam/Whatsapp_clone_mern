import express from 'express';
import MessageService from './message.service.js';
const router = express.Router();

router.post('/', MessageService.createMessage);
router.get('/', MessageService.getMessage);
router.post('/get-user-messages', MessageService.getUserMessages)

export default router;
