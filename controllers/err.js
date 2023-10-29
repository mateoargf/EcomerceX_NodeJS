const get404 = (req,res) => {
     res.status(404).render('pages/err404')
 } 

 module.exports = {
     get404
 }