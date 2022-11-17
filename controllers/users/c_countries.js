const Country = require('../../models/users/m_countries');
const {res_error, res_success} = require('../../response')

const getAllCountries = async (req, res) => {
    try {
        await Country.find({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)
            
            return res_success(res, 200, "200 OK", "Datas Contries", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const getCountryById = async (req, res) => {
    try {
        const _idCountry = req.params.id;
        await Country.findOne({"_id":_idCountry}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)
            
            return res_success(res, 200, "200 OK", "Datas Contries", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const changeCountryById = async (req, res) => {
    try {
        const _idCountry = req.params.id;
        const {country} = req.body;

        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", err.message);

        await Country.updateOne({"_id":_idCountry}, {$set:{"country":country}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 200, "200 OK", "Country name was changed")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeCountry = async (req, res) => {
    try {
        const {country} = req.body;

        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) return res_error(res, 403, "403 Forbidden", err.message);
        await Country.create({
            country
        }, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 201, "201 Created", "Your was listed a country")
        })
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteCountryById = async (req, res) => {
    try {
        let _idCountry = req.params.id;

        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", err.message);

        await Country.deleteOne({_id:_idCountry}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 200, "200 OK", "Your was deleted a country")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error){
            if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
        }
    }
}

const deleteAllcounties = async (req, res) => {
    try {
        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", err.message);
        await Country.deleteMany({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 200, "200 OK", "Your was deleted all countries")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error){
            if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
        }
    }
}

module.exports = {getAllCountries, getCountryById, changeCountryById, storeCountry, deleteCountryById, deleteAllcounties}