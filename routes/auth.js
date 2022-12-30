

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Post = require('../model/Post');

router.post('/', async (req, res) => {
	const user = Post.find({ codeName: req.body.codeName });
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header('token', token).send(token);

	console.log(token);
});

module.exports = router;
