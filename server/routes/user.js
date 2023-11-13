// express
const router = require('express').Router()
const { passport } = require('./../config/configGoogle');

// asignamos las funciones de controllers a routes
const {
     getRegistroExitoso,
     // getFormularioGoogleLogin,
     // getFormularioGoogleLogout,
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

router.get('/auth/google/callback',getGoogleCallback )
router.get('/auth/google',getAuthGoogle)






// router.get('/googleLogin',getFormularioGoogleLogin)
// router.get('/googleLogout',getFormularioGoogleLogout)



module.exports = router