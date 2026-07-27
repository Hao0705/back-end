const express = require('express');
const router = express.Router();
const { getHomepage, getImage, postCreateUser, createUser, createUserPage } = require('../controllers/homeController');

// khai báo 1 route 
router.get('/', getHomepage);

router.get('/admin', getImage);

router.post('/create-user', postCreateUser);
router.get('/create', createUserPage);

module.exports = router;
