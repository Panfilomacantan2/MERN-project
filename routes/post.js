import express from 'express';
const router = express.Router();

import { createPost, getAllPosts, deletePost } from '../controller/post.js';


router.get('/', getAllPosts).post('/', createPost).delete('/:id', deletePost);

export default router;
