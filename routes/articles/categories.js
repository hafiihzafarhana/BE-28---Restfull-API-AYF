const express = require('express');
const router = express.Router();

const {getAllCategories, getCategoryById, changeCategoryById, storeCategory, deleteCategoryById, deleteAllCategories} = require('../../controllers/articles/c_categories')
const {checkJWT} = require('./../../controllers/validasi')

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

router.use(checkJWT);
router.put("/:id", changeCategoryById);
router.post("/", storeCategory);
router.delete("/:id", deleteCategoryById);
router.delete("/", deleteAllCategories);

module.exports = router;