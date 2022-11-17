const Comment = require('../../models/articles/m_comments');
const {res_error, res_success} = require('../../response')
const {auth, token, user} = require('../validasi')

const getCommentById = async (req, res) => {
    
}

const storeCommentById = async (req, res) => {
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


const deleteCommentById = async (req, res) => {
    
}

module.exports = {getCommentById, storeCommentById, deleteCommentById}