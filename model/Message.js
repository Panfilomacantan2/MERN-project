

const moment = require('moment');
const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
	message: String,
	createdAt: {
		type: Date,
		default: () => moment.defaultFormat()
	},
});

module.exports = mongoose.model('Message', messageSchema);
