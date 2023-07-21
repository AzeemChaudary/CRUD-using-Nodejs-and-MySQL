const express = require('express');
const router = express.Router();

// Import the necessary controller functions
const {
  gettAll,
  getUser,
  AddUser,
  updateUser,
  deleteUser,
} = require('../Controllers/user');

router.get('/user/gettAll', gettAll);
router.get('/user/getUser/:id', getUser);
router.put('/user/updateUser', updateUser);
router.post('/user/AddUser', AddUser);
router.delete('/user/deleteUser/:id', deleteUser);

module.exports = router;
