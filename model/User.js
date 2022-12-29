const Mongoose = require('mongoose');

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

module.exports = mongoose.model('User', userSchema);
