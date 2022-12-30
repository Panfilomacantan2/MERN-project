const express = require('express');
const router = express.Router();

const {getAllUsers, getUserById, createUser, updateUser, deleteUser} = require('../controller/user.js');
router.get('/', getAllUsers).post('/', createUser).put('/', updateUser).delete('/:id', deleteUser).get('/:id', getUserById);

module.exports = router;