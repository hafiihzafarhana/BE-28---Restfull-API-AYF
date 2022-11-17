const User = require('./../models/users/m_users');
const Article = require('./../models/articles/m_articles');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const bcrypt = require('bcryptjs');
const {res_error, res_success} = require('./../response')
env.config();

const {user, token} = require('./validasi')

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
            console.log(token)
        return res_success(res, 200, "200 OK", "You was login", token)
        }

    } catch (error) {
        if(error){
            return res.send("kesalahan server")
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

const changePassword = (req, res) => {
    try {
        const {new_password} = req.body;
        const _idUser = req.user.user._id

        User.updateOne({"_id":_idUser}, {$set:{"password":new_password}})
        .then(() => res.send("Password sudah diganti"))
        .catch(() => res.send("Password gagal diganti"))

    } catch (error) {
        if(error){
            return res.send("gagal server");
        }
    }
}

const changeProfile = (req, res) => {
    try {
        const {first_name, last_name, username, date_of_birth, country, phone_number} = req.body;
        const _idUser = req.user.user._id
        User.updateOne({"_id":_idUser}, 
        {$set:{"first_name":first_name, "last_name":last_name, "username":username, "date_of_birth":date_of_birth,
        "country":country, "phone_number":phone_number}})
        .then(() => res.send("Profile sudah diganti"))
        .catch(() => res.send("Profile gagal diganti"))
    } catch (error) {
        if(error){
            return res.send("gagal server");
        }
    }   
}

const profile = async (req, res) => {
    try {
        const _idUser = req.user.user._id
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

const likedArticles = async (req, res) => {
    try {
        const _idUser = req.user.user._id
        await Article.find({}, {"likes":{$elemMatch:{"_idUser":_idUser}}})
        .then((data) => res.json(data))
        .catch(() => res.send("gagal"))
    } catch (error) {
        if(error){
            return res.send("gagal server");
        }
    }
}

module.exports = {login, register, changePassword, changeProfile, profile, likedArticles};