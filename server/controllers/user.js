// bcrypt
const bcrypt = require('bcrypt')
// modelos
const Usuarios = require('../models/usuarios')

const getFormularioRegistro = (req, res) => {
     res.status(200).render('pages/registro', { errorMessage: req.flash('error') })
}

const postFormularioRegistro = async (req, res) => {
     // destructuring del modelo usuarios
     const { username, password, email } = req.body

     const hashedPassword = await bcrypt.hash(password, 10)
     console.log(username, password, email)
     try {
          const user = await Usuarios.create({ username, password: hashedPassword, email })
          console.log(user)
          res.redirect('/')
     } catch(error){
          if(error.code===11000){
               req.flash('error', 'este usuario ya esta en uso')
               console.log('este usuario ya esta en uso')

          }else{
               req.flash('error', 'error desconocido')
               console.log('error desconocido')
          }
          res.redirect('/user/registro');
     }
}

module.exports = {
     getFormularioRegistro,
     postFormularioRegistro
}