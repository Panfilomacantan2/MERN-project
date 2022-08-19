import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
	codeName: String,
	message: String,
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	category: {
		type: String,
		default: 'Appreciation',
	},
});

export default mongoose.model('Post', postSchema);
