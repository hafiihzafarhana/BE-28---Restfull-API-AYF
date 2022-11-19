const Country = require('../../models/users/m_countries');
const {res_error, res_success} = require('../../response')
const env = require('dotenv');
env.config();

const getAllCountries = async (req, res) => {
    try {
        await Country.find({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get all countries")
            
            return res_success(res, 200, "200 OK", "Get all data Countries", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const getCountryById = async (req, res) => {
    try {
        const _idCountry = req.params.id;
        await Country.findOne({"_id":_idCountry}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get country by ID")
            
            return res_success(res, 200, "200 OK", "Get data country by id", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const changeCountryById = async (req, res) => {
    try {
        const _idCountry = req.params.id;
        const {country} = req.body;

        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't change the country by id (Admin)");

        await Country.updateOne({"_id":_idCountry}, {$set:{"country":country}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot change country by ID")

            return res_success(res, 200, "200 OK", "You was change a country by id")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeCountry = async (req, res) => {
    try {
        const {country} = req.body;

        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) return res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't store the country (Admin)");
        await Country.create({
            country
        }, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot store country")

            return res_success(res, 201, "201 Created", "You was listed a country")
        })
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteCountryById = async (req, res) => {
    try {
        let _idCountry = req.params.id;

        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't delete country by id (Admin)");

        await Country.deleteOne({_id:_idCountry}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot delete country by ID")

            return res_success(res, 200, "200 OK", "You was deleted a country")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error){
            if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
        }
    }
}

const deleteAllcounties = async (req, res) => {
    try {
        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't delete all countries (Admin)");
        await Country.deleteMany({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot delete all countries")

            return res_success(res, 200, "200 OK", "You was deleted all countries")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error){
            if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
        }
    }
}

module.exports = {getAllCountries, getCountryById, changeCountryById, storeCountry, deleteCountryById, deleteAllcounties}