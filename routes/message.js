import express from 'express';

const router = express.Router();

import { createMessage, postMessage } from '../controller/message.js';

router.post('/', createMessage).get('/', postMessage);

export default router;
