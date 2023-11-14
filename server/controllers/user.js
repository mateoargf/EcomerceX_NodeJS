// bcrypt
const bcrypt = require('bcrypt')
// modelos usuario
const Usuarios = require('../models/usuarios')
// modelos usuario google
const userGoogle = require('./../models/userGoogle')
// passport
const passport = require('passport')
// oauth20
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const {  User } = require('./../config/configGoogle.js');
// const {OAuth2Client} = require('google-auth-library');
const key = require('./../config/keysGoogle.js');
const url = require('url');
const cookies = require('cookie-parser');

//validacionpassword-email
const { validarContrasena } = require('./../utilsBack/validacionContrasena');
const { validarMail } = require('./../utilsBack/validacionMail');

// GET y POST
const getFormulario = (req, res) => {
     const activeTab = req.query.activeTab ;//si no hay query, login
     if (activeTab === 'login') {
         return res.render('pages/registro', { 
          activeTab: 'login', 
          errorMessage: req.flash('error') })
     }else if (activeTab === 'signup') {
           return res.render('pages/registro', { 
               activeTab: 'signup', 
               errorMessage: req.flash('error') })
      }else {
               res.status(200).render('pages/registro', { 
               activeTab: 'login', 
               errorMessage: req.flash('error') })
          }
     };
const postFormulario = async (req, res) => {
      console.log("req.body",req.body)
     //activeTab es el nombre de la pestaña activa
     const activeTab = req.body.activeTab ;//si no hay query, login
     console.log("activeTab",activeTab)
     if(activeTab === 'signup') {
          const { username, password, email } = req.body
          const contraseñaError = validarContrasena(password, username);   
          const emailError = await validarMail(email);

          if (contraseñaError) {
               req.flash('error', contraseñaError);
               return res.redirect('/user/registro?active=signup');
          }
          if (emailError) {   
               req.flash('error', emailError);
               return res.redirect('/user/registro?active=signup');
          }
          const hashedPassword = await bcrypt.hash(password, 10)

          try {
               const user = await Usuarios.create({ username, password: hashedPassword, email })
               console.log(user)
               req.session.user = user;
               res.redirect('/user/RegistroExitoso')
          }
          catch (error) {
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
                    console.log(error)
                    req.flash('error', 'error desconocido')
                    console.log('error desconocido:', error)
               }
               res.redirect('/user/registro?active=signup');
          }
     }else if(activeTab === 'login') {
          const { username, password } = req.body
          console.log("username",username)
          try{
               console.log("try")

               const user = await Usuarios.findOne({ username });
               if(!user){
                    console.log("usuario incorrecto");
                    req.flash('error', 'Nombre de usuario incorrecto');
                    return res.redirect('/user/registro?active=login');
               }
               const match = await bcrypt.compare(password, user.password);
               if(!match){
                    console.log("password incorrecto");
                    req.flash('error', 'Contraseña incorrecta');
                    return res.redirect('/user/registro?active=login');
               }
               req.session.user = user;
               console.log("user",user)
               return res.redirect('/user/LogueoExitoso');

          } catch (error) {
               req.flash('error', 'Error al iniciar sesión');
               console.error('Error al iniciar sesión:', error);
               return res.redirect('/user/registro?active=login');
          }
     }
     };
     
//logueo y registro exitoso
const getRegistroExitoso = (req, res) => {
     const nombreUsuario = req.session.user.username;
     console.log("nombreUsuario",req.session.user)
     res.status(200).render('pages/registroExitoso',{errorMessage:'' ,username: nombreUsuario})}

     const getLogueoExitoso = (req, res) => {
     const nombreUsuario = req.session.user.username;
     console.log("nombreUsuario",req.session.user)
     res.status(200).render('pages/logueoExitoso',{errorMessage:'' ,username: nombreUsuario})}


const getAuthGoogle  = passport.authenticate('registroGoogle', { scope: ['profile', 'email'] });

const getGoogleCallback = (req, res, next) => {
     //cookies

     passport.authenticate('registroGoogle', (err, user, info) => {
       // Aquí puedes manejar la redirección después de la autenticación de Google
       //cookies

       if (err) {
         return next(err);
       }
       req.session.user = user;
       const action = req.cookies.activeTab;
       console.log("action",action)
        
        esNuevoUsuario = info.nuevoUsuario
       if (esNuevoUsuario===false) {
          if (action === 'login') {
               console.log("action user y menssage",action,user,esNuevoUsuario)
               return res.render('pages/registroExitoso', { errorMessage: '',username:user.username});
             } else {
               console.log("action user y menssage",action,user,esNuevoUsuario)
               return res.render('pages/registroExitoso',{ errorMessage: 'Ya existía y se logueó' ,username: user.username});
             }
     }else{
          if (action === 'login') {
               console.log("action user y menssage",action,user,esNuevoUsuario)
               return res.render('pages/RegistroExitoso',{ mensaje: 'No estaba registrado. Se creó usuario' ,username: user.username});
               } else if(action === 'register'){
                    console.log("action user y menssage",action,user,esNuevoUsuario)
               return res.render('pages/registroExitoso', { errorMessage: '',username: user.username });
               }
          }
          
        
      console.log("no paso nada")       
     })(req, res, next);
   }; 

   


module.exports = {
     // getFormularioGoogleLogin,
     // getFormularioGoogleLogout,
     getGoogleCallback,
     getAuthGoogle,

     postFormulario,
     getFormulario,
     getLogueoExitoso,
     getRegistroExitoso,
     
    
}
