const express = require('express');
const router = express.Router();

const user = require('./users/users');
const genders = require('./users/genders');
const countries = require('./users/countries');
const roles = require('./users/roles');
const articles = require('./articles/articles');
const categories = require('./articles/categories');
const comments = require('./articles/comments');
const likes = require('./articles/likes');
const auth = require('./auth/auth');
const welcome = require('./welcome/welcome');

router.use('/users', user);
router.use('/genders', genders);
router.use('/countries', countries);
router.use('/roles', roles);

router.use('/articles', articles);
router.use('/categories', categories);
router.use('/comments', comments);
router.use('/likes', likes);

router.use('/auth', auth);

router.use('/', welcome);

module.exports = router;