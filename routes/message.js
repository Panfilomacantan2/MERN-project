import express from 'express';

const router = express.Router();

import { createMessage, postMessage } from '../controller/message.js';

router.get('/', createMessage).post('/', postMessage);

export default router;
