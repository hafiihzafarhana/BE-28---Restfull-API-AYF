// const Article = require('./../models/articles/m_articles');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const {res_error, res_success} = require('./../response')
env.config();

let auth = null;
let token = null;
let user = null;

const checkJWT = (req, res, next) => {
    try {
        auth = req.headers.authorization;
        token = auth.split(" ")[1];
        user = jwt.verify(token, process.env.CODE_JWT);
        if(!user) res_error(res, 403, "403 Forbidden", "You haven't been authenticated and authorized")
        next()
    } catch (error) {
        if(error) res_error(res, 500, "500 Internal Server Error", "There is an error from the server side")
    }
}

const getAllArticles = async (req, res) => {
    // nanti kamu benahi, aku cuman ngecheck jwt nya bisa apa enggak
    try {
        res.send("sukses")
    } catch (error) {
        if(error){
            res.send("Gagal")
        }
    }
}

const getArticleById = () => {
    
}

const likedArticleById = () => {
    
}

const changeArticleById = () => {
    
}

const commentArticleById = () => {
    
}

const storeArticle = () => {
        // nanti kamu benahi, aku cuman ngecheck jwt nya bisa apa enggak
    try {
        res.send("sukses")
    } catch (error) {
        if(error){
            res.send("Gagal")
        }
    }
}

const deleteArticleById = () => {
    
}

const deleteAllArticle = () => {
    
}

module.exports = {getAllArticles, getArticleById, likedArticleById, changeArticleById, commentArticleById, storeArticle, deleteArticleById, deleteAllArticle, checkJWT}