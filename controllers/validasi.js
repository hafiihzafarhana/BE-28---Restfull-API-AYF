const env = require('dotenv');
const jwt = require('jsonwebtoken');
env.config();
const {res_error} = require('./../response')

let auth = null;
let token = null;
let user = null;

const checkJWT = (req, res, next) => {
    try {
        auth = req.headers.authorization;
        token = auth.split(" ")[1];
        user = jwt.verify(token, process.env.CODE_JWT);
        req.auth = auth;
        req.token = token;
        req.user = user;
        if(!user || user == null) res_error(res, 403, "403 Forbidden", "You haven't been authenticated and authorized")
        next()
    } catch (error) {
        if(error) res_error(res, 500, "500 Internal Server Error", "There is an error from the server side")
    }
}

module.exports = {checkJWT}