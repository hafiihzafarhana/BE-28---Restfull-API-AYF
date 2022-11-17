const express = require('express');
const router = express.Router();

const {getAllCountries, getCountryById, changeCountryById, storeCountry, deleteCountryById, deleteAllcounties} = require('../../controllers/users/c_countries')

router.get("/", getAllCountries);
router.get("/:id", getCountryById);
router.put("/:id", changeCountryById);
router.post("/", storeCountry);
router.delete("/:id", deleteCountryById);
router.delete("/", deleteAllcounties);

module.exports = router;