const Users = require('./../models/m_users');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const bcrypt = require('bcryptjs');
const {res_error, res_success} = require('./../res_validate')
env.config();

const login = () => {

}

const register = () => {
    
}

const changePassword = () => {
    
}

const changeProfile = () => {
    
}

const profile = () => {
    
}

const likedArticles = () => {
    
}

module.exports = {login, register, changePassword, changeProfile, profile, likedArticles};