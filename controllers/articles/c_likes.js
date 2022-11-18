const Like = require('../../models/articles/m_likes');
const {res_error, res_success} = require('../../response')

const getLikeByIdArticle = async (req, res) => {
    try {
        const _idArticle = req.params.id
        await Like.find({"article":_idArticle}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)
            
            return res_success(res, 200, "200 OK", `Datas Likes in id:${_idArticle}`, result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeLikeByIdArticle = async (req, res) => {
    try {
        const _idArticle = req.params.id
        const user = req.user.user._id

        if(!_idArticle) res_error(res, 403, "403 Forbidden", err.message)

        await Like.create({article:_idArticle, user}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)
    
            return res_success(res, 201, "201 Created", "Your was liked the article")
        })

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteLikeByIdArticle = async (req, res) => {
    try {
        const _idArticle = req.params.idComment
        const {_id, user} = req.body
        if(req.user.user._id != user) res_error(res, 403, "403 Forbidden", err.message)
            await Like.deleteOne({"_id":_id}, {"user":user, "article":_idArticle}, (err, result) => {
                if(err) return res_error(res, 400, "400 Bad Request", err.message)
    
                return res_success(res, 200, "200 OK", "Your was inliked the article")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {getLikeByIdArticle, storeLikeByIdArticle, deleteLikeByIdArticle}