const express = require('express');
const router = express.Router();

const {getAllCategories, getCategoryById, changeCategoryById, storeCategory, deleteCategoryById, deleteAllCategories} = require('./../controllers/c_categories')

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.put("/:id", changeCategoryById);
router.post("/", storeCategory);
router.delete("/:id", deleteCategoryById);
router.delete("/", deleteAllCategories);

module.exports = router;