import mongoose from 'mongoose';
import moment from 'moment-timezone';
import Message from '../model/Message.js';

console.log(moment());

const createMessage = async (req, res) => {
	try {
		const message = await Message.create(req.body);
		if (message) {
			res.status(201).send(message);
		}
	} catch (error) {
		console.log(`Message error: ${error.message}`);
	}
};

export { createMessage };
