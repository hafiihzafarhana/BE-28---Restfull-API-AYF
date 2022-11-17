const Article = require('../../models/articles/m_articles');
const {res_error, res_success} = require('../../response')

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
        try {
            const {author, title, image, likes, content, slug, comments, category} = req.body
            if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", err.message);
            Article.create({author, title, image, likes, content, slug, comments, category}, (err, result) => {
                if(err) return res_error(res, 400, "400 Bad Request", err.message)
    
                return res_success(res, 201, "201 Created", "Your was post a article")
            })
        } catch (error) {
            if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
        }
}

const deleteArticleById = async (req, res) => {
    
}

const deleteAllArticle = async (req, res) => {
    
}

module.exports = {getAllArticles, getArticleById, changeArticleById, storeArticle, deleteArticleById, deleteAllArticle}