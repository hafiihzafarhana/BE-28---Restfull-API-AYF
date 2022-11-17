const Category = require('../../models/articles/m_categories');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const {res_error, res_success} = require('../../response')
env.config();

const getAllCategories = async (req, res) => {
    try {
        await Category.find({}, (err, result) => {
            res.json({result})
        })
    } catch (error) {
        
    }
}

const getCategoryById = async (req, res) => {
    try {
        const _idCategory = req.params.id;
        await Category.findOne({"_id":_idCategory}, (err, result) => {
            res.json({result})
        })
    } catch (error) {
        
    }
}

const changeCategoryById = async (req, res) => {
    try {
        const _idCategory = req.params.id;
        const {category} = req.body;
        console
        await Category.updateOne({"_id":_idCategory}, {$set:{"category":category}}, (err, result) => {
            res.json("Berhasil Ganti")
        })
    } catch (error) {
        
    }
}

const storeCategory = async (req, res) => {
    try {
        const {category} = req.body;
        await Category.create({
            category
        })
        res.send("berhasil")
    } catch (error) {
        res.send(error)
    }
}

const deleteCategoryById = async (req, res) => {
    try {
        let _idCategory = req.params.id;
        await Category.deleteOne({_id:_idCategory})
        .then(() => {
            return res.send("Berhasil hapus")
        })
        .catch(() => {
            return res.send("Salah")
        })
    } catch (error) {
        if(error){
            return res.send(error.message)
        }
    }
}

const deleteAllCategories = async (req, res) => {
    try {
        await Category.deleteMany({})
        .then(() => {
            return res.send("Berhasil hapus semua")
        })
        .catch(() => {
            return res.send("Salah")
        })
    } catch (error) {
        if(error){
            return res.send(error.message)
        }
    }
}

module.exports = {getAllCategories, getCategoryById, changeCategoryById, storeCategory, deleteCategoryById, deleteAllCategories}