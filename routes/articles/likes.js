const express = require('express');
const router = express.Router();

const {getLikeByIdArticle, storeLikeByIdArticle, deleteLikeByIdArticle} = require('../../controllers/articles/c_likes')
const {checkJWT} = require('./../../controllers/validasi')

router.get("/:id", getLikeByIdArticle);

router.use(checkJWT);
router.post("/:id", storeLikeByIdArticle);
router.delete("/:id", deleteLikeByIdArticle);

module.exports = router;