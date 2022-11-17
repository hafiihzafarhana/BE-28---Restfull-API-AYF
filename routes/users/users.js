const express = require('express');
const router = express.Router();

const {login, register, changePassword, changeProfile, profile, changeRole} = require('./../../controllers/users/c_users')
const {checkJWT} = require('../../controllers/validasi')

router.post("/login", login);
router.post("/register", register);

router.use(checkJWT);
router.put("/change-password", changePassword);
router.put("/change-role/:id", changeRole)
router.put("/change-profile", changeProfile);
router.get("/profile", profile);

module.exports = router;