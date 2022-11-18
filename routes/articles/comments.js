const express = require('express');
const router = express.Router();

const {getCommentByIdArticle, storeCommentById, deleteCommentById} = require('../../controllers/articles/c_comments')
const {checkJWT} = require('./../../controllers/validasi')

router.get("/:id", getCommentByIdArticle);

router.use(checkJWT);
router.post("/:id", storeCommentById);
router.delete("/:id", deleteCommentById);

module.exports = router;