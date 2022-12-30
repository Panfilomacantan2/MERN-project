
const User = require('../model/User');

const getAllUsers = async (req, res) => {
	const users = await User.find();
	res.send(users);
};

const getUserById = async (req, res) => {
	const user = await User.findById(req.params.id);
	res.send(user);
};

const createUser = async (req, res) => {
	const user = await User.create(req.body);
	res.status(201).send(user);

// 	//check if the user is already exist
// 	const user = await User.findOne({ email: req.body.email });
// 	if (user) {
// 		res.status(400).send('User already exist');
// 	} else {
// 		const newUser = await User.create(req.body);
// 		res.send(newUser);
// 	}
};

const updateUser = async (req, res) => {
	const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.send(user);
};

const deleteUser = async (req, res) => {
	const user = await User.findByIdAndDelete(req.params.id);
	res.send(user);
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
