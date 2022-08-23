import mongoose from 'mongoose';
import Message from '../model/Message.js';

const createMessage = async (req, res) => {
	console.log(req, res);
};

const postMessage = async (req, res) => {
	const data = Message.find();
	if (data) {
		res.send(data);
	}
};

export { createMessage, postMessage };
