const Like = require('../../models/articles/m_likes');
const {res_error, res_success} = require('../../response')

const getLikeByIdArticle = async (req, res) => {
    try {
        const _idArticle = req.params.id
        await Like.find({"article":_idArticle}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)
            
            return res_success(res, 200, "200 OK", `Datas Likes in id:${_idArticle}`, result)
        }).populate('user article', 'username title').clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeLikeByIdArticle = async (req, res) => {
    try {
        const _idArticle = req.params.id
        const user = req.user.user._id

        if(!_idArticle) res_error(res, 403, "403 Forbidden", "You're not an authenticated, authorized user")

        

        await Like.create({article:_idArticle, user}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot like the article")
    
            return res_success(res, 201, "201 Created", "You was liked the article")
        })

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteLikeByIdArticle = async (req, res) => {
    try {
        const _idArticle = req.params.id
        const {_id, user} = req.body

        if(!_idArticle || req.user.user._id != user) res_error(res, 403, "403 Forbidden", "You're not an authenticated, authorized user")
            await Like.deleteOne({"_id":_id}, {"user":user, "article":_idArticle}, (err, result) => {
                if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot unlike the article")
    
                return res_success(res, 200, "200 OK", "You was unliked the article")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {getLikeByIdArticle, storeLikeByIdArticle, deleteLikeByIdArticle}