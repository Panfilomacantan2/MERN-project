

const mongoose = require('mongoose');
const moment = require('moment-timezone');
const philippineDate = moment.tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss');

const postSchema = mongoose.Schema({
	codeName: String,
	message: String,
	createdAt: {
		type: Date,
		default: () => moment.tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss'),
	},
	category: {
		type: String,
		default: 'Appreciation',
	},
});

module.exports = mongoose.model('Post', postSchema);
