const Country = require('./../models/users/m_countries');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const {res_error, res_success} = require('./../response')
env.config();

const getAllCountries = async (req, res) => {
    try {
        await Country.find({}, (err, result) => {
            res.json({result})
        })
    } catch (error) {
        
    }
}

const getCountryById = async (req, res) => {
    try {
        const _idCountry = req.params.id;
        await Country.findOne({"_id":_idCountry}, (err, result) => {
            res.json({result})
        })
    } catch (error) {
        
    }
}

const changeCountryById = async (req, res) => {
    try {
        const _idCountry = req.params.id;
        const {country} = req.body;
        console
        await Country.updateOne({"_id":_idCountry}, {$set:{"country":country}}, (err, result) => {
            res.json("Berhasil Ganti")
        })
    } catch (error) {
        
    }
}

const storeCountry = async (req, res) => {
    try {
        const {country} = req.body;
        await Country.create({
            country
        })
        res.send("berhasil")
    } catch (error) {
        res.send(error)
    }
}

const deleteCountryById = async (req, res) => {
    try {
        let _idCountry = req.params.id;
        await Country.deleteOne({_id:_idCountry})
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

const deleteAllcounties = async (req, res) => {
    try {
        await Country.deleteMany({})
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

module.exports = {getAllCountries, getCountryById, changeCountryById, storeCountry, deleteCountryById, deleteAllcounties}