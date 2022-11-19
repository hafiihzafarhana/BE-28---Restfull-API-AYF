const Role = require('../../models/users/m_roles');
const {res_error, res_success} = require('../../response')
const env = require('dotenv');
env.config();

const getAllRoles = async (req, res) => {
    try {
        await Role.find({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get all roles")
            
            return res_success(res, 200, "200 OK", "Get all data Roles ", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const getRoleById = async (req, res) => {
    try {
        const _idROle = req.params.id;
        await Role.findOne({"_id":_idROle}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get role by ID")
            
            return res_success(res, 200, "200 OK", "Get data role by id", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const changeRoleById = async (req, res) => {
    try {
        const _idROle = req.params.id;
        const {role} = req.body;

        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't change the role by id (Admin)");

        await Role.updateOne({"_id":_idROle}, {$set:{"role":role}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot change role by ID")

            return res_success(res, 200, "200 OK", "You was change a role by id")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeRole = async (req, res) => {
    try {
        const {role} = req.body;

        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't store the role (Admin)");

        await Role.create({
            role
        }, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot store role")

            return res_success(res, 201, "201 Created", "You was listed a role")
        })
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteRoleById = async (req, res) => {
    try {
        let _idROle = req.params.id;
        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't delete role by id (Admin)");
        await Role.deleteOne({"_id":_idROle}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot delete role by ID")

            return res_success(res, 200, "200 OK", "You was deleted a role")
        }).clone().catch(err => console.log(err))
        
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteAllRoles = async (req, res) => {
    try {

        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't delete all roles (Admin)");

        await Role.deleteMany({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot delete all roles")

            return res_success(res, 200, "200 OK", "You was deleted all roles")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {getAllRoles, getRoleById, changeRoleById, storeRole, deleteRoleById, deleteAllRoles}