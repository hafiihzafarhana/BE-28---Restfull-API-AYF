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
   //   like:[{
   //      _idUser:{
   //          type:mongoose.Schema.Types.ObjectId,
   //          ref:"User"
   //      }
   //   }],
     content:{
        type:String,
        minLength:[20, 'Must be at least 20 character']
     },
     slug:{
        type:String,
        required:true
     },
   //   comment:[{
   //      _idUser:{
   //          type:mongoose.Schema.Types.ObjectId,
   //          ref:"User"
   //      },
   //      msg:{
   //          type:String,
   //          minLength:[1, 'Must be at least 1 character']
   //      }
   //   }],
     category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
     },
     createdAt:{
      type: Date,
      default: new Date(),
  }
});

const Article = mongoose.model('Articles', ArticleSchema);

module.exports = Article;