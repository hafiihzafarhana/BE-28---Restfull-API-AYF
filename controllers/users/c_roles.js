const Role = require('../../models/users/m_roles');
const {res_error, res_success} = require('../../response')

const getAllRoles = async (req, res) => {
    try {
        await Role.find({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)
            
            return res_success(res, 200, "200 OK", "Datas Roles", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const getRoleById = async (req, res) => {
    try {
        const _idROle = req.params.id;
        await Role.findOne({"_id":_idROle}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)
            
            return res_success(res, 200, "200 OK", "Datas Roles", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const changeRoleById = async (req, res) => {
    try {
        const _idROle = req.params.id;
        const {role} = req.body;

        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", err.message);

        await Role.updateOne({"_id":_idROle}, {$set:{"role":role}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 200, "200 OK", "Role name was changed")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeRole = async (req, res) => {
    try {
        const {role} = req.body;

        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", err.message);

        await Role.create({
            role
        }, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 201, "201 Created", "Your was listed a role")
        })
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteRoleById = async (req, res) => {
    try {
        let _idROle = req.params.id;
        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", err.message);
        await Role.deleteOne({"_id":_idROle}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 200, "200 OK", "Your was deleted a role")
        }).clone().catch(err => console.log(err))
        
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteAllRoles = async (req, res) => {
    try {

        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", err.message);

        await Role.deleteMany({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 200, "200 OK", "Your was deleted all roles")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {getAllRoles, getRoleById, changeRoleById, storeRole, deleteRoleById, deleteAllRoles}