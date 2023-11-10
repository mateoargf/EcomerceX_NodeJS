// express
const router = require('express').Router()

// asignamos las funciones de controllers a routes
const {
     getFormularioRegistro,
     postFormularioRegistro,
     getRegistroExitoso,
     getFormularioGoogleLogin,
     getFormularioGoogleLogout,
     getGoogleRedirect
} = require('../controllers/user')

const {
     scopeGoogle,
     authenticateGoogle
} = require('../middleware/user')

// rutas: GET
router.get('/registro', getFormularioRegistro)
router.get('/googleLogin',getFormularioGoogleLogin)
router.get('/googleLogout',getFormularioGoogleLogout)
router.get('/googleAuthenticate',scopeGoogle)
router.get('/google/redirect', authenticateGoogle, getGoogleRedirect)
router.get('/RegistroExitoso', getRegistroExitoso)

// rutas: POST
router.post('/registro', postFormularioRegistro)


module.exports = router