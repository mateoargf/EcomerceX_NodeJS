// bcrypt
const bcrypt = require('bcrypt')
// modelos
const Usuarios = require('../models/usuarios')
// passport
const passport = require('passport')
// google
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// keys
const keys = require('./../config/configGoogle');
// flash

     

//validacionpassword
const { validarContrasena } = require('./../utilsBack/validacionContrasena');
//validacionemail
const { validarMail} = require('./../utilsBack/validacionMail');


//LOGUEO Y REGISTRO EXITOSO
const getRegistroExitoso = (req, res) => {
     res.status(200).render('pages/registroExitoso');
 }
const getLogueoExitoso = (req, res) => {
     res.status(200).render('pages/logueoExitoso');
 }

// Formularios registro y login
const getFormularioRegistro = (req, res) => {
<<<<<<< HEAD

     res.status(200).render('pages/registro', {
=======
     res.status(200).render('pages/registro', { 
          errorMessage: req.flash('error')
     })
}
const getFormularioLogin = (req, res) => {
     res.status(200).render('pages/registro', { 
>>>>>>> c4d7e20dcb9931aaab7232cf5ece7f120ce90787
          errorMessage: req.flash('error')
     })
}

//GOOGLE
const getFormularioGoogleLogin = (req, res) => {
     res.render('login', { user: req.user })
}

const getFormularioGoogleLogout = (req, res) => {
     req.logOut()
     res.redirect('/')
}

const getGoogleRedirect = async (req, res) => {
     res.status(200).render('pages/registroExitoso');
}

const getGoogleCallback = async (req, res) => {
     res.status(200).render('pages/registroExitoso');
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
          res.redirect('/user/RegistroExitoso')
     } catch(error){
         //error por duplicado
          if(error.code===11000){
               if(error.keyPattern && error.keyPattern.email){
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

   
const postFormularioLogin = async(req, res) => {
     const { username, password } = req.body
     console.log(username, password)

     try {
          const user = await Usuarios.findOne({ username });
          if (!user) {
              req.flash('error', 'Nombre de usuario incorrecto');
              return res.redirect('/user/login');
          }
  
          // Comparar la contraseña proporcionada con la almacenada en la base de datos
          const match = await bcrypt.compare(password, user.password);
          if (!match) {
              req.flash('error', 'Contraseña incorrecta');
              return res.redirect('/user/login');
          }
  
          // Si las credenciales son correctas, iniciar sesión
          req.login(user, (err) => {
              if (err) {
                  req.flash('error', 'Error al iniciar sesión');
                  return res.redirect('/user/login');
              }
              // Si el inicio de sesión es exitoso, redirigir al panel de control, por ejemplo
              return res.redirect('/user/loginExitoso');
          });
      } catch (error) {
          req.flash('error', 'Error al iniciar sesión');
          console.error('Error al iniciar sesión:', error);
          return res.redirect('/user/login');
      }
  };

  const getAuthGoogle = async(req, res, next) => {
     await passport.authenticate('google', {
       successRedirect: '/user/registroExitoso',
       failureRedirect: '/err/404',
       scope: ['profile', 'email']
     })(req, res, next);
   };
module.exports = {
     getFormularioGoogleLogin,
     getFormularioGoogleLogout,
     getGoogleRedirect,
     getAuthGoogle,
     getGoogleCallback,

     


     postFormularioRegistro,
     postFormularioLogin,
     
     getLogueoExitoso,
     getRegistroExitoso,
     getFormularioRegistro,
     getFormularioLogin
}