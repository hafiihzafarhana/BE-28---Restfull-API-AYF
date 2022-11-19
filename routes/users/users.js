const express = require('express');
const router = express.Router();

const {changePassword, changeProfile, profile, changeRole} = require('./../../controllers/users/c_users')
const {checkJWT} = require('../../controllers/validasi')

router.use(checkJWT);
router.put("/change-password", changePassword);
router.put("/change-role/:id", changeRole)
router.put("/change-profile", changeProfile);
router.get("/profile", profile);

module.exports = router;