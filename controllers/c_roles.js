const Role = require('./../models/users/m_roles');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const {res_error, res_success} = require('./../response')
env.config();

const getAllRoles = async (req, res) => {
    try {
        await Role.find({}, (err, result) => {
            res.json({result})
        })
    } catch (error) {
        
    }
}

const getRoleById = async (req, res) => {
    try {
        const _idROle = req.params.id;
        await Role.findOne({"_id":_idROle}, (err, result) => {
            res.json({result})
        })
    } catch (error) {
        
    }
}

const changeRoleById = async (req, res) => {
    try {
        const _idROle = req.params.id;
        const {role} = req.body;
        console
        await Role.updateOne({"_id":_idROle}, {$set:{"role":role}}, (err, result) => {
            res.json("Berhasil Ganti")
        })
    } catch (error) {
        
    }
}

const storeRole = async (req, res) => {
    try {
        const {role} = req.body;
        await Role.create({
            role
        })
        res.send("berhasil")
    } catch (error) {
        res.send(error)
    }
}

const deleteRoleById = async (req, res) => {
    try {
        let _idROle = req.params.id;
        await Role.deleteOne({"_id":_idROle})
        .then(() => {
            return res.send("Berhasil hapus")
        })
        .catch(() => {
            return res.send("Salah")
        })
    } catch (error) {
        if(error){
            return res.send(error.message)
        }
    }
}

const deleteAllRoles = async (req, res) => {
    try {
        await Role.deleteMany({})
        .then(() => {
            return res.send("Berhasil hapus semua")
        })
        .catch(() => {
            return res.send("Salah")
        })
    } catch (error) {
        if(error){
            return res.send(error.message)
        }
    }
}

module.exports = {getAllRoles, getRoleById, changeRoleById, storeRole, deleteRoleById, deleteAllRoles}