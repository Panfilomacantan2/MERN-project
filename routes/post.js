import express from 'express';

import { createPost, getAllPosts, deletePost } from '../controller/post.js';

const router = express.Router();

router.get('/', getAllPosts).post('/', createPost).delete('/:id', deletePost);

export default router;
