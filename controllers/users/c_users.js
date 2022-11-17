const User = require('../../models/users/m_users');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const bcrypt = require('bcryptjs');
const {res_error, res_success} = require('../../response')
env.config();

const login = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({ username }).lean();

        if(!user)  res_error(res, 400, "400 Bad Request", "Your username or password is invalid")

        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign({user},process.env.CODE_JWT)
            
            return res_success(res, 200, "200 OK", "You was login", token)
        }

    } catch (error) {
        if(error) res_error(res, 500, "500 Internal Server Error", error.message)
    }
}

const register = async (req, res) => {
    try {
        const {first_name, last_name, username, password:textPass, date_of_birth, role, country, email, phone_number, gender} = req.body
        const password = await bcrypt.hash(textPass, 10);
        await User.create({first_name, last_name, username, password, date_of_birth, role, country, email, phone_number, gender}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 201, "201 Created", "Your Account was registered")
        })
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const changePassword = async (req, res) => {
    try {
        const {new_password:textPass} = req.body;
        const new_password = await bcrypt.hash(textPass, 10);
        const _idUser = req.user.user._id

        await User.updateOne({"_id":_idUser}, {$set:{"password":new_password}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

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
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

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
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 200, "200 OK", "Your data was checked", result)
        }).populate('role country gender', "role country gender").clone().catch(err => console.log(err))
        
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {login, register, changePassword, changeProfile, profile};