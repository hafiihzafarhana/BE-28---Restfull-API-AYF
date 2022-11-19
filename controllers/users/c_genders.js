const Gender = require('../../models/users/m_genders');
const {res_error, res_success} = require('../../response')
const env = require('dotenv');
env.config();

const getAllGenders = async (req, res) => {
    try {
        await Gender.find({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get all genders")
            
            return res_success(res, 200, "200 OK", "Get all data Genders", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const getGenderById = async (req, res) => {
    try {
        const _idGender = req.params.id;
        await Gender.findOne({"_id":_idGender}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get gender by ID")
            
            return res_success(res, 200, "200 OK", "Get data gender by id", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const changeGenderById = async (req, res) => {
    try {
        const _idGender = req.params.id;
        const {gender} = req.body;

        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't change the gender by id (Admin)");
        
        await Gender.updateOne({"_id":_idGender}, {$set:{"gender":gender}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot change gender by ID")

            return res_success(res, 200, "200 OK", "You was change a gender by id")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeGender = async (req, res) => {
    try {
        const {gender} = req.body;
        
        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) return res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't store the gender (Admin)");
        
        await Gender.create({
            gender
        },(err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot store gender")

            return res_success(res, 201, "201 Created", "You was listed a gender")
        })
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteGenderById = async (req, res) => {
    try {
        let _idGender = req.params.id;

        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) return res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't delete gender by id (Admin)");

        await Gender.deleteOne({_id:_idGender}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot delete gender by ID")

            return res_success(res, 200, "200 OK", "You was deleted a gender")
        }).clone().catch(err => console.log(err))
        
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteAllGenders = async (req, res) => {
    try {

        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) return res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't delete all genders (Admin)");
        
        await Gender.deleteMany({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot delete all genders")

            return res_success(res, 200, "200 OK", "You was deleted all genders")
        }).clone().catch(err => console.log(err))

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {getAllGenders, getGenderById, changeGenderById, storeGender, deleteGenderById, deleteAllGenders}