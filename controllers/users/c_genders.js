const Gender = require('../../models/users/m_genders');
const {res_error, res_success} = require('../../response')

const getAllGenders = async (req, res) => {
    try {
        await Gender.find({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)
            
            return res_success(res, 200, "200 OK", "Datas Genders", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const getGenderById = async (req, res) => {
    try {
        const _idGender = req.params.id;
        await Gender.findOne({"_id":_idGender}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)
            
            return res_success(res, 200, "200 OK", "Datas Genders", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const changeGenderById = async (req, res) => {
    try {
        const _idGender = req.params.id;
        const {gender} = req.body;

        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", err.message);
        
        await Gender.updateOne({"_id":_idGender}, {$set:{"gender":gender}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 200, "200 OK", "Gender name was changed")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeGender = async (req, res) => {
    try {
        const {gender} = req.body;
        
        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) return res_error(res, 403, "403 Forbidden", err.message);
        
        await Gender.create({
            gender
        },(err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 201, "201 Created", "Your was listed a gender")
        })
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteGenderById = async (req, res) => {
    try {
        let _idGender = req.params.id;

        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) return res_error(res, 403, "403 Forbidden", err.message);

        await Gender.deleteOne({_id:_idGender}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 200, "200 OK", "Your was deleted a gender")
        }).clone().catch(err => console.log(err))
        
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteAllGenders = async (req, res) => {
    try {

        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) return res_error(res, 403, "403 Forbidden", err.message);
        
        await Gender.deleteMany({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 200, "200 OK", "Your was deleted all genders")
        }).clone().catch(err => console.log(err))

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {getAllGenders, getGenderById, changeGenderById, storeGender, deleteGenderById, deleteAllGenders}