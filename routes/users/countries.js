const express = require('express');
const router = express.Router();

const {getAllCountries, getCountryById, changeCountryById, storeCountry, deleteCountryById, deleteAllcounties} = require('../../controllers/users/c_countries')
const {checkJWT} = require('./../../controllers/validasi');

router.get("/", getAllCountries);
router.get("/:id", getCountryById);
router.use(checkJWT)
router.put("/:id", changeCountryById);
router.post("/", storeCountry);
router.delete("/:id", deleteCountryById);
router.delete("/", deleteAllcounties);

module.exports = router;