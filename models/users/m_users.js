const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
   first_name:{
      type:String,
      required:true,
      minlength:[4, 'Must be at least 4 character']
   },
   last_name:{
      type:String,
      required:true,
      minlength:[4, 'Must be at least 4 character']
   },
   username:{
      type:String,
      required:true,
      minlength:[8, 'Must be at least 8 character'],
      unique:true
   },
   password:{
      type:String,
      required:true,
      minlength:[8, 'Must be at least 8 character']
   },
   date_of_birth:{
      type:Date,
      required:true
   },
   role:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Role",
      required:true
   },
   country:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Country",
      required:true
   },
   gender:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Gender",
      required:true
   },
   email:{
      type:String,
      required:true
   },
   phone_number:{
      type:String,
      required:true
   }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;