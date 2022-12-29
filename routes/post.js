const express = require('express');
const router = express.Router();

const { createPost, getAllPosts, deletePost } = require('../controller/post');


router.get('/', getAllPosts).post('/', createPost).delete('/:id', deletePost);

module.exports = router;