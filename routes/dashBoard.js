const express = require('express');
const router = express.Router();
const { verifyToken } = require('../routes/verifyToken');

router.get('/', verifyToken, (req, res) => {
	res.status(200).send('This is DashBoard');
});

module.exports = router;
