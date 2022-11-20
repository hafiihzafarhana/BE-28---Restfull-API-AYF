const { default: mongoose } = require("mongoose");

const ArticleSchema = mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
     },
     title:{
        type:String,
        required:true
     },
     image:{
        type:String,
        default:""
     },
     content:{
        type:String,
        minLength:[20, 'Must be at least 20 character']
     },
     slug:{
        type:String,
        required:true
     },
     category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
     },
     createdAt:{
      type: Date,
      default: new Date(),
  }
});

ArticleSchema.index({title:'text'})

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;