const express = require('express');
const router = express.Router();

const {getLikeById, storeLikeById} = require('../../controllers/articles/c_likes')
const {checkJWT} = require('./../../controllers/validasi')

router.get("/:id", getLikeById);

router.use(checkJWT);
router.post("/:id", storeLikeById);

module.exports = router;