const express = require('express');
const router = express.Router();

import { createPost, getAllPosts, deletePost } from '../controller/post.js';


router.get('/', getAllPosts).post('/', createPost).delete('/:id', deletePost);

module.exports = router;