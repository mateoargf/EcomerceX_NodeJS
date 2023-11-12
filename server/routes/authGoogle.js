const router = require('express').Router();

const autorizo=(req,res,next)=>{
    console.log("hola")

if(!req.user){
    res.redirect('/auth/login')
}else{
    next()
}
}

router.get('/', autorizo,(req,res)=>{

    res.render('profile',{user:req.user})
})


module.exports=router