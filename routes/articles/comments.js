const express = require('express');
const router = express.Router();

const {getCommentById, storeCommentById, deleteCommentById} = require('../../controllers/articles/c_comments')
const {checkJWT} = require('./../../controllers/validasi')

router.get("/:id", getCommentById);

router.use(checkJWT);
router.post("/:id", storeCommentById);
router.delete("/:id", deleteCommentById);

module.exports = router;