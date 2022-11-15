const express = require('express');
const router = express.Router();

const {login, register, changePassword, changeProfile, profile, likedArticles} = require('./../controllers/c_users')

router.post("/login", login);
router.post("/register", register);
router.put("/change-password", changePassword);
router.put("/change-profile", changeProfile);
router.get("/profile/:id", profile);
router.get("/liked-articles", likedArticles);

module.exports = router;