const router = require('express').Router();

const autorizo=(req,res,next)=>{
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