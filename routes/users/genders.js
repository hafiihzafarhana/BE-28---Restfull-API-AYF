const express = require('express');
const router = express.Router();

const {getAllGenders, getGenderById, changeGenderById, storeGender, deleteGenderById, deleteAllGenders} = require('./../../controllers/users/c_genders')
const {checkJWT} = require('./../../controllers/validasi');

router.get("/", getAllGenders);
router.get("/:id", getGenderById);
router.use(checkJWT)
router.put("/:id", changeGenderById);
router.post("/", storeGender);
router.delete("/:id", deleteGenderById);
router.delete("/", deleteAllGenders);

module.exports = router;