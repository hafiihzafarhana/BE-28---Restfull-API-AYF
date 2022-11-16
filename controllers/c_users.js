const User = require('./../models/users/m_users');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const bcrypt = require('bcryptjs');
const {res_error, res_success} = require('./../response')
env.config();

const login = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({ username }).lean();

        if(!user) return res.json({mesg:"Username atau password salah"})

        if(password == user.password){
            const token = jwt.sign({
                user                    
            },process.env.CODE_JWT
        )
        return res_success(res, 200, "200 OK", "You was login", token)
        }

    } catch (error) {
        if(error){
            res.send("kesalahan server")
        }
    }
}

const register = async (req, res) => {
    try {
        const {first_name, last_name, username, password, date_of_birth, role, country, email, phone_number} = req.body
        await User.create({first_name, last_name, username, password, date_of_birth, role, country, email, phone_number})
        .then(() => res.send("akun berhasil dibuat"))
    } catch (error) {
        if(error){
            res.send("kesalahan server")
        }
    }
}

const changePassword = () => {
    
}

const changeProfile = () => {
    
}

const profile = async (req, res) => {
    try {
        _idUser = req.params.id;
        await User.findOne({"_id":_idUser}).populate('role', "role")
            .then((data) => {
                console.log(data)
                res.json(data)})
            .catch(() => res.send("error clinet"))
    } catch (error) {
        if(error){
            return res.send("erro server")
        }
    }
}

const likedArticles = () => {
    
}

module.exports = {login, register, changePassword, changeProfile, profile, likedArticles};