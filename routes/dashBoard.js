import express from 'express';
const router = express.Router();
import { verifyToken } from '../routes/verifyToken.js';

router.get('/', verifyToken, (req, res) => {
	res.status(200).send('This is DashBoard');
});

export default router;
