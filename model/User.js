import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	name: String,
	email: String,
	password: String,
	age: Number,
	createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('User', userSchema);
