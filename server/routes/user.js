// express
const router = require('express').Router()


// asignamos las funciones de controllers a routes
const {
     
     
     getRegistroExitoso,
     getFormularioGoogleLogin,
     getFormularioGoogleLogout,
     getGoogleRedirect,
     getGoogleCallback,
     getAuthGoogle,
     postFormulario,
     getLogueoExitoso,
     getFormulario,
     
     
} = require('../controllers/user');


// rutas: GET
router.get('/registro', getFormulario)
router.post('/registro', postFormulario)


router.get('/LogueoExitoso',getLogueoExitoso)
router.get('/RegistroExitoso', getRegistroExitoso)





router.get('/googleLogin',getFormularioGoogleLogin)
router.get('/googleLogout',getFormularioGoogleLogout)
router.get('/auth/google/callback',getGoogleCallback )
router.get('/auth/google',getAuthGoogle)
router.get('/google/redirect', getGoogleRedirect)







module.exports = router