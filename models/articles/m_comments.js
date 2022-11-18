const { default: mongoose } = require("mongoose");

const CommentSchema = mongoose.Schema({
    comment:{
        type:String,
        minLength:[1, 'Must be at least 1 character']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
     },
    article:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Article"
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;