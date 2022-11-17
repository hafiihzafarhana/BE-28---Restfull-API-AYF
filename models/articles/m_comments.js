const { default: mongoose } = require("mongoose");

const CommentSchema = mongoose.Schema({
    comment:{
        type:String,
        minLength:[1, 'Must be at least 1 character']
    },
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
     },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;