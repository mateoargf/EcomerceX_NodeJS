// bcrypt
const bcrypt = require('bcrypt')
// modelos
const Usuarios = require('../models/usuarios')
//validacionpassword
const { validarContrasena } = require('./../utilsBack/validacionContrasena');
//validacionemail
<<<<<<< HEAD
const { validarMail } = require('../utils/validacionMail');

// controladores: GET
=======
const { validarMail} = require('./../utilsBack/validacionMail');


const getRegistroExitoso = (req, res) => {
     res.status(200).render('pages/registroExitoso');
 }

>>>>>>> f22f818755d9aeada3c0046352d10314d41cab99
const getFormularioRegistro = (req, res) => {
     
     res.status(200).render('pages/registro', { 
          errorMessage: req.flash('error')
     })
}

const getFormularioGoogleLogin = (req, res) => {
     res.render('login', { user: req.user })
}

const getFormularioGoogleLogout = (req, res) => {
     req.logOut()
     res.redirect('/')
}

const getGoogleRedirect = async (req, res) => {
     res.redirect('/profile')
}

// controladores: POST
const postFormularioRegistro = async (req, res) => {

     // destructuring del modelo usuarios
     const { username, password, email } = req.body
     console.log(username, password, email)

     // validacion de contraseña
     const contraseñaError = validarContrasena(password, username);
     if (contraseñaError) {
          req.flash('error', contraseñaError);
          return res.redirect('/user/registro');
     }

     // validacion de email
     const emailError = await validarMail(email);
     if (emailError) {
          req.flash('error', emailError);
          return res.redirect('/user/registro');
     }

     //Hast contraseña
     const hashedPassword = await bcrypt.hash(password, 10)


     try {
          const user = await Usuarios.create({ username, password: hashedPassword, email })
          console.log(user)
<<<<<<< HEAD
          res.redirect('/')
     } catch (error) {
          //error por duplicado
          if (error.code === 11000) {
               if (error.keyPattern && error.keyPattern.email) {
=======
          res.redirect('/user/RegistroExitoso')
     } catch(error){
         //error por duplicado
          if(error.code===11000){
               if(error.keyPattern && error.keyPattern.email){
>>>>>>> f22f818755d9aeada3c0046352d10314d41cab99
                    req.flash('error', 'este email ya esta en uso')
                    console.log('este email ya esta en uso')
               }
               else {
                    req.flash('error', 'este usuario ya esta en uso')
                    console.log('este usuario ya esta en uso')
               }
          } else {
               req.flash('error', 'error desconocido')
               console.log('error desconocido:', error)
          }
          res.redirect('/user/registro');
     }
}

module.exports = {
     getFormularioRegistro,
     postFormularioRegistro,
<<<<<<< HEAD
     getFormularioGoogleLogin,
     getFormularioGoogleLogout,
     getGoogleRedirect
=======
     getRegistroExitoso
>>>>>>> f22f818755d9aeada3c0046352d10314d41cab99
}