// express
const router = require('express').Router()


// asignamos las funciones de controllers a routes
const {
     getFormularioRegistro,
     postFormularioRegistro,
     getRegistroExitoso,
     getFormularioGoogleLogin,
     getFormularioGoogleLogout,
     getGoogleRedirect,
     getGoogleCallback,
     getAuthGoogle,
     postFormularioLogin,
     getLogueoExitoso,
     getFormularioLogin
     
} = require('../controllers/user');


// rutas: GET
router.get('/registro', getFormularioRegistro)
router.get('/registro', getFormularioLogin)
router.get('/LogueoExitoso',getLogueoExitoso)
router.get('/RegistroExitoso', getRegistroExitoso)

router.get('/googleLogin',getFormularioGoogleLogin)
router.get('/googleLogout',getFormularioGoogleLogout)
router.get('/auth/google/callback',getGoogleCallback )
router.get('/auth/google',getAuthGoogle)
router.get('/google/redirect', getGoogleRedirect)





// rutas: POST
router.post('/registro', postFormularioRegistro)
router.post('/registro', postFormularioLogin)


module.exports = router