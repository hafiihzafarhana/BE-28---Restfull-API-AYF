const User = require('./../models/users/m_users');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const bcrypt = require('bcryptjs');
const {res_error, res_success} = require('./../response')
env.config();

const login = () => {

}

const register = async (req, res) => {
    try {
        const {role} = req.body
        await User.create({role})
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