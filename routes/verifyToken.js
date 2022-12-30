const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
	const token = req.header('token');
	if (!token) return res.status(400).send('No token.');

	const verified = jwt.verify(token, process.env.TOKEN_SECRET);

	res.user = verified;
    next();
};
module.exports = verifyToken;
