const { default: mongoose } = require("mongoose");

const GenderSchema = mongoose.Schema({
    gender:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

const Gender = mongoose.model('Gender', GenderSchema);

module.exports = Gender;