const Gender = require('./../models/users/m_genders');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const {res_error, res_success} = require('./../response')
env.config();

const getAllGenders = async (req, res) => {
    try {
        await Gender.find({}, (err, result) => {
            res.json({result})
        })
    } catch (error) {
        
    }
}

const getGenderById = async (req, res) => {
    try {
        const _idGender = req.params.id;
        await Gender.findOne({"_id":_idGender}, (err, result) => {
            res.json({result})
        })
    } catch (error) {
        
    }
}

const changeGenderById = async (req, res) => {
    try {
        const _idGender = req.params.id;
        const {gender} = req.body;
        console
        await Gender.updateOne({"_id":_idGender}, {$set:{"gender":gender}}, (err, result) => {
            res.json("Berhasil Ganti")
        })
    } catch (error) {
        
    }
}

const storeGender = async (req, res) => {
    try {
        const {gender} = req.body;
        await Gender.create({
            gender
        })
        res.send("berhasil")
    } catch (error) {
        res.send(error)
    }
}

const deleteGenderById = async (req, res) => {
    try {
        let _idGender = req.params.id;
        await Gender.deleteOne({_id:_idGender})
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

const deleteAllGenders = async (req, res) => {
    try {
        await Gender.deleteMany({})
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

module.exports = {getAllGenders, getGenderById, changeGenderById, storeGender, deleteGenderById, deleteAllGenders}