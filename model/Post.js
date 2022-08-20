import mongoose from 'mongoose';
import moment from 'moment-timezone';
const datePhilippines = moment.tz(Date.now(), 'Asia/Manila');

const postSchema = mongoose.Schema({
	codeName: String,
	message: String,
	createdAt: {
		type: Date,
		default: datePhilippines,
	},
	category: {
		type: String,
		default: 'Appreciation',
	},
});

export default mongoose.model('Post', postSchema);
