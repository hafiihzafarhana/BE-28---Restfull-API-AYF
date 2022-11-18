const Comment = require('../../models/articles/m_comments');
const {res_error, res_success} = require('../../response')

const getCommentByIdArticle = async (req, res) => {
    try {
        const _idArticle = req.params.id

        await Comment.find({"article":_idArticle}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)
            
            return res_success(res, 200, "200 OK", `Datas Comments in id:${_idArticle}`, result)
        }).clone().catch(err => console.log(err))

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeCommentById = async (req, res) => {
    try {
        const {comment} = req.body
        const _idArticle = req.params.id

        if(!_idArticle) res_error(res, 403, "403 Forbidden", err.message)

        await Comment.create({comment, article:_idArticle, user:req.user.user._id}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 201, "201 Created", "Your was commented the article")
        })

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}


const deleteCommentById = async (req, res) => {
    try {
        const _idArticle = req.params.id
        const {_id, user} = req.body

        if(!_idArticle || req.user.user._id != user) res_error(res, 403, "403 Forbidden", err.message)

        await Comment.deleteOne({"_id":_id}, {"user":user, "article":_idArticle}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 200, "200 OK", "Your was deleted your comment")
        }).clone().catch(err => console.log(err))

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }   
}

module.exports = {getCommentByIdArticle, storeCommentById, deleteCommentById}