const Article = require('../../models/articles/m_articles');
const {res_error, res_success} = require('../../response')
const {auth, token, user} = require('../validasi')

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

const getArticleById = async (req, res) => {
    
}

const changeArticleById = async (req, res) => {
    
}

const storeArticle = async (req, res) => {
        // nanti kamu benahi, aku cuman ngecheck jwt nya bisa apa enggak
        try {
            const {author, title, image, likes, content, slug, comments, category} = req.body
            Article.create({author, title, image, likes, content, slug, comments, category})
            .then(() => res.send("Berhasil ditambahkan"))
            .catch(() => res.send("gagal ditambahkan"))
        } catch (error) {
            if(error){
                res.send("kesalahan server")
            }
        }
}

const deleteArticleById = async (req, res) => {
    
}

const deleteAllArticle = async (req, res) => {
    
}

module.exports = {getAllArticles, getArticleById, changeArticleById, storeArticle, deleteArticleById, deleteAllArticle}