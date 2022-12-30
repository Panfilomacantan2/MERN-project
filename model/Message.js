import mongoose from 'mongoose';
import moment from 'moment';

const messageSchema = mongoose.Schema({
	message: String,
	createdAt: {
		type: Date,
		default: () => moment.defaultFormat()
	},
});

export default mongoose.model('Message', messageSchema);
