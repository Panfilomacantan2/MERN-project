import express from 'express';

import { createPost, getAllPosts } from '../controller/post.js';

const router = express.Router();

router.get('/', getAllPosts).post('/', createPost);

export default router;
