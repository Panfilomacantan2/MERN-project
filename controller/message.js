const Message = require('../model/Message');

const createMessage = async (req, res) => {
	console.log(req, res);
};

const postMessage = async (req, res) => {
	const data = Message.find();
	if (data) {
		res.send(data);
	}
};

module.exports = { createMessage, postMessage };
