const express = require('express');
const router = express.Router();

const { createMessage, postMessage } = require('../controller/message');

router.get('/', createMessage).post('/', postMessage);

module.exports = router;
