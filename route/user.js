const express = require('express');
const router = express.Router();

const {getAllUsers,
  deleteUser,
  updateUse,
  updateUser
} = require('../controllers/userController')


router.get('/', getAllUsers);
router.get('/delete', deleteUser);
router.get('/update', updateUser);



module.exports = router;