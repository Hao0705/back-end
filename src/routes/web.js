const express = require('express');
const router = express.Router();
const { getHomepage, getImage } = require('../controllers/homeController');

// khai báo 1 route 
router.get('/', getHomepage);

router.get('/admin', getImage);

module.exports = router;
