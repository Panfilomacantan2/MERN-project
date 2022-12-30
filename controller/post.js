import Post from '../model/Post.js';

// @params POST && PUBLIC
const createPost = async (req, res) => {
	try {
		const post = await Post.create(req.body);
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
			res.status(201).send(getPosts);
		}
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

export { createPost, getAllPosts, deletePost };
