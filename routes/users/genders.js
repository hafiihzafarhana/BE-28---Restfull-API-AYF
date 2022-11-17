const express = require('express');
const router = express.Router();

const {getAllGenders, getGenderById, changeGenderById, storeGender, deleteGenderById, deleteAllGenders} = require('./../../controllers/users/c_genders')

router.get("/", getAllGenders);
router.get("/:id", getGenderById);
router.put("/:id", changeGenderById);
router.post("/", storeGender);
router.delete("/:id", deleteGenderById);
router.delete("/", deleteAllGenders);

module.exports = router;