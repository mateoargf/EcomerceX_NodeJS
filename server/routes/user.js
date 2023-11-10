// express
const router = require('express').Router()

// asignamos las funciones de controllers a routes
const {
     getFormularioRegistro,
     postFormularioRegistro,
<<<<<<< HEAD
     getFormularioGoogleLogin,
     getFormularioGoogleLogout,
     getGoogleRedirect
=======
     getRegistroExitoso
>>>>>>> f22f818755d9aeada3c0046352d10314d41cab99
} = require('../controllers/user')

const {
     scopeGoogle,
     authenticateGoogle
} = require('../middleware/user')

// rutas: GET
router.get('/registro', getFormularioRegistro)
<<<<<<< HEAD
router.get('/googleLogin',getFormularioGoogleLogin)
router.get('/googleLogout',getFormularioGoogleLogout)
router.get('/googleAuthenticate',scopeGoogle)
router.get('/google/redirect', authenticateGoogle, getGoogleRedirect)

=======
router.get('/RegistroExitoso', getRegistroExitoso)
>>>>>>> f22f818755d9aeada3c0046352d10314d41cab99
// rutas: POST
router.post('/registro', postFormularioRegistro)


module.exports = router