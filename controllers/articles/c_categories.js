const Category = require('../../models/articles/m_categories');
const {res_error, res_success} = require('../../response')

const getAllCategories = async (req, res) => {
    try {
        await Category.find({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get all categories")
            
            return res_success(res, 200, "200 OK", "Get all data Articles", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const getCategoryById = async (req, res) => {
    try {
        const _idCategory = req.params.id;
        await Category.findOne({"_id":_idCategory}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get category by ID")
            
            return res_success(res, 200, "200 OK", "Get data category by id", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const changeCategoryById = async (req, res) => {
    try {
        const _idCategory = req.params.id;
        const {category} = req.body;
        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't change the article (Admin)");
        await Category.updateOne({"_id":_idCategory}, {$set:{"category":category}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot change category by ID")

            return res_success(res, 200, "200 OK", "You was change a category by id")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeCategory = async (req, res) => {
    try {
        const {category} = req.body;
        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't change the article (Admin)");
        await Category.create({
            category
        }, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot store category")

            return res_success(res, 201, "201 Created", "You was listed a category")
        })
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteCategoryById = async (req, res) => {
    try {
        let _idCategory = req.params.id;
        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't change the article (Admin)");
        await Category.deleteOne({_id:_idCategory}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot delete category by ID")

            return res_success(res, 200, "200 OK", "You was deleted a category")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteAllCategories = async (req, res) => {
    try {
        if(req.user.user.role != "63768bc8eceebff9eda8e878" || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't change the article (Admin)");
        await Category.deleteMany({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot delete all categories")

            return res_success(res, 200, "200 OK", "You was deleted all categories")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {getAllCategories, getCategoryById, changeCategoryById, storeCategory, deleteCategoryById, deleteAllCategories}