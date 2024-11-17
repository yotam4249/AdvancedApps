const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const Posts = mongoose.model('Posts',userSchema);
module.exports = Posts
############################################