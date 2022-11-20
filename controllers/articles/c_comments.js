const Comment = require('../../models/articles/m_comments');
const {res_error, res_success} = require('../../response')
const env = require('dotenv');
env.config();

const getCommentByIdArticle = async (req, res) => {
    try {
        const _idArticle = req.params.id

        await Comment.find({"article":_idArticle}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get all comments by ID of article")
            
            return res_success(res, 200, "200 OK", `Get data comments in article with id : ${_idArticle}`, result)
        }).populate('user article', 'username title').clone().catch(err => console.log(err))

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeCommentById = async (req, res) => {
    try {
        const {comment} = req.body
        const _idArticle = req.params.id

        if(!_idArticle) res_error(res, 403, "403 Forbidden", "You're not an authenticated, authorized user")

        await Comment.create({comment, article:_idArticle, user:req.user.user._id}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot store comment by ID of article")

            return res_success(res, 201, "201 Created", `You was commented the article with id : ${_idArticle}`)
        })

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}


const deleteCommentById = async (req, res) => {
    try {
        const _idArticle = req.params.id
        const {_id, user} = req.body

        if(!_idArticle || req.user.user._id != user) res_error(res, 403, "403 Forbidden", "You're not an authenticated, authorized user")

        await Comment.deleteOne({"_id":_id}, {"user":user, "article":_idArticle}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot delete comment by ID of article and user")

            return res_success(res, 200, "200 OK", `You was deleted your comment in the article with id ${_idArticle}`)
        }).clone().catch(err => console.log(err))

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }   
}

module.exports = {getCommentByIdArticle, storeCommentById, deleteCommentById}