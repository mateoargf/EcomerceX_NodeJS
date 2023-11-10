const mongoose =require('mongoose')
const Schema=mongoose.Schema

const userShema=new Schema({
    username:String,
    googleId:String,
    thumbnail:String
})

const User=mongoose.model('user',userShema)



module.exports=User