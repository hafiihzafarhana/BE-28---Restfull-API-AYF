const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
    
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;