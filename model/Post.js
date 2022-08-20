import mongoose from 'mongoose';
import moment from 'moment-timezone';
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

export default mongoose.model('Post', postSchema);
