const express = require('express');
const router = express.Router();

const {getAllRoles, getRoleById, changeRoleById, storeRole, deleteRoleById, deleteAllRoles} = require('../../controllers/users/c_roles')

router.get("/", getAllRoles);
router.get("/:id", getRoleById);
router.put("/:id", changeRoleById);
router.post("/", storeRole);
router.delete("/:id", deleteRoleById);
router.delete("/", deleteAllRoles);

module.exports = router;