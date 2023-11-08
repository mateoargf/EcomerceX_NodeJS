// bcrypt
const bcrypt = require('bcrypt')
// modelos
const Usuarios = require('../models/usuarios')

const getFormularioRegistro = (req, res) => {
     res.status(200).render('pages/registro')
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
               console.log('este usuario ya esta en uso')
          }
     }
}

module.exports = {
     getFormularioRegistro,
     postFormularioRegistro
}