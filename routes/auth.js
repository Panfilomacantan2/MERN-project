import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import Post from '../model/Post.js';

router.post('/', async (req, res) => {
	const user = Post.find({ codeName: req.body.codeName });
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header('token', token).send(token);

	console.log(token);
});

export default router;
