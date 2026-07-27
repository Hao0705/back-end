const express = require('express');
const router = express.Router();
const { getHomepage, getImage, postCreateUser } = require('../controllers/homeController');

// khai báo 1 route 
router.get('/', getHomepage);

router.get('/admin', getImage);

router.post('/create-user', postCreateUser);

module.exports = router;
