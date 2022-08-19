import express from 'express';

const router = express.Router();

import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controller/user.js';

router.get('/', getAllUsers).post('/', createUser).put('/', updateUser).delete('/:id', deleteUser).get('/:id', getUserById);

export default router;
