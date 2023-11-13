const mongoose =require('mongoose')
const Schema=mongoose.Schema

const usergoogleShema=new Schema({
    username:{
        type:String,
        required: true
    },
    googleId:{
        type:String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
   }
})

const UserGoogle=mongoose.model('userGoogle',usergoogleShema)



module.exports=UserGoogle