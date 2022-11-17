const express = require('express');
const router = express.Router();

const {getAllArticles, getArticleById, changeArticleById, storeArticle, deleteArticleById, deleteAllArticle} = require('../../controllers/articles/c_articles')
const {checkJWT} = require('./../../controllers/validasi')

router.get("/", getAllArticles);
router.get("/:id", getArticleById);

router.use(checkJWT);
router.put("/:id", changeArticleById);
router.post("/", storeArticle);
router.delete("/:id", deleteArticleById);
router.delete("/", deleteAllArticle);

module.exports = router;