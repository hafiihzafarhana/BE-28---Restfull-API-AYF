const { default: mongoose } = require("mongoose");

const ArticleSchema = mongoose.Schema({
    
});

const Article = mongoose.model('Articles', ArticleSchema);

module.exports = Article;