// express
const Router = require('express')
const router = Router()

// asignamos las funciones de controllers a routes
const {
     getFormularioRegistro,
     postFormularioRegistro,
     getRegistroExitoso
} = require('../controllers/user')

// rutas: GET
router.get('/registro', getFormularioRegistro)
router.get('/RegistroExitoso', getRegistroExitoso)
// rutas: POST
router.post('/registro', postFormularioRegistro)


module.exports = router