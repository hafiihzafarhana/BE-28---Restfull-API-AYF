const { default: mongoose } = require("mongoose");

const LikeSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    article:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Article",
        required:true
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

const Like = mongoose.model('Like', LikeSchema);

module.exports = Like;