const mongoose = require('mongoose');
const moment = require('moment-timezone');

const generateRandomWords = () => {
	const randomWords = 'abcdefghijklmnopqrstuvwxyz';
	let words = '';
	for (let i = 0; i < 5; i++) {
		words += randomWords.charAt(Math.floor(Math.random() * randomWords.length));
	}
	return words;
};


const postSchema = mongoose.Schema({
	codeName: String,
	message: String,
	createdAt: {
		type: Date,
		default: () => moment().format('YYYY-MM-DD HH:mm:ss'),
	},
	category: {
		type: String,
		default: 'Appreciation',
	},
	avatar:{
		type: String,
		default: () => `https://avatars.dicebear.com/api/micah/${generateRandomWords()}.svg`,
	}
});

module.exports = mongoose.model('Post', postSchema);
