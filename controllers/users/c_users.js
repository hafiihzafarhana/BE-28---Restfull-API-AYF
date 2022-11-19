const User = require('../../models/users/m_users');
const env = require('dotenv');
const bcrypt = require('bcryptjs');
const {res_error, res_success} = require('../../response')
env.config();

const changePassword = async (req, res) => {
    try {
        const {new_password:textPass} = req.body;
        const new_password = await bcrypt.hash(textPass, 10);
        const _idUser = req.user.user._id

        await User.updateOne({"_id":_idUser}, {$set:{"password":new_password}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot change password")

            return res_success(res, 200, "200 Ok", "Your password was changed")  
        }).clone().catch(err => console.log(err))

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const changeProfile = async (req, res) => {
    try {
        const {first_name, last_name, date_of_birth, country, phone_number, gender} = req.body;
        const _idUser = req.user.user._id
        await User.updateOne({"_id":_idUser}, 
        {$set:{"first_name":first_name, "last_name":last_name, "date_of_birth":date_of_birth,
        "country":country, "phone_number":phone_number, "gender":gender}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot change profile")

            return res_success(res, 200, "200 OK", "Your profile was changed")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }   
}

const profile = async (req, res) => {
    try {
        const _idUser = req.user.user._id
        await User.findOne({"_id":_idUser}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get profile")

            return res_success(res, 200, "200 OK", "Your data was checked", result)
        }).populate('role country gender', "role country gender").clone().catch(err => console.log(err))
        
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const changeRole = async (req, res) => {
    try {
        const {role} = req.body;
        const _idYangDituju = req.params.id
        const _idUser = req.user.user._id
        const isAdmin = await User.findOne({"_id":_idUser})
        
        if(isAdmin.role != process.env.ADMIN || isAdmin.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't change role of user (Admin)");

        await User.updateOne({"_id":_idYangDituju}, {$set:{"role":role}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot change role of user");

            return res_success(res, 200, "200 OK", "User role was updated")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {changePassword, changeProfile, profile, changeRole};