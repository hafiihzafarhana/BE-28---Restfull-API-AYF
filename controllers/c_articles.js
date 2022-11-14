const Article = require('./../models/m_articles');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const {res_error, res_success} = require('./../res_validate')
env.config();

const getAllArticles = () => {

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
    
}

const deleteArticleById = () => {
    
}

const deleteAllArticle = () => {
    
}

module.exports = {getAllArticles, getArticleById, likedArticleById, changeArticleById, commentArticleById, storeArticle, deleteArticleById, deleteAllArticle}