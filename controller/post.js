const Post = require('../model/Post');
const needle = require('needle');
const url = require('url');

const { BASE_URL } = process.env;

// @params POST && PUBLIC
const createPost = async (req, res) => {
	try {
		const post = await Post.create(req.body);

		post.save();
		console.log(req.body);
		if (post) {
			res.status(201).send(post);
		}
	} catch (error) {
		console.log(`Post error: ${error.message}`);
	}
};

// @params GET && PUBLIC
const getAllPosts = async (req, res) => {
	try {
		const getPosts = await Post.find();
		if (getPosts) {
			// const params = new URLSearchParams({
			// 	['apiKey']: `Hello, I'm a message from the server!`,
			// 	...url.parse(req.url, true).query,
			// });
			// console.log(params);
			const response = await needle('get', `${BASE_URL}`);

			console.log(response.body);
		// }
		// if (process.env.NODE_ENV !== 'production') {
		// 	console.log('I am in development mode');
		// }

		}

		res.status(200).send(getPosts);
	} catch (error) {
		console.log(`Post error: ${error.message}`);
	}
};

const deletePost = async (req, res) => {
	try {
		const deletePosts = await Post.deleteOne({ _id: req.params.id });
		if (deletePosts) {
			res.status(201).send(deletePosts);
		}
	} catch (error) {
		console.log(`Post error: ${error.message}`);
	}
};

module.exports = { createPost, getAllPosts, deletePost };
