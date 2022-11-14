const express = require('express');
const router = express.Router();

const user = require('./users');
const list = require('./articles');

router.use('/users', user);
router.use('/articles', list);

module.exports = router;