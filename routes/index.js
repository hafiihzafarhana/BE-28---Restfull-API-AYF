const express = require('express');
const router = express.Router();

const user = require('./users');
const list = require('./articles');
const genders = require('./genders');
const countries = require('./countries');
const roles = require('./roles');

router.use('/users', user);
router.use('/articles', list);
router.use('/genders', genders);
router.use('/countries', countries);
router.use('/roles', roles);

module.exports = router;