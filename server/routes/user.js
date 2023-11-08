const Router = require('express')
const router = Router()

// asignamos las funciones de controllers a routes
const {
     getFormularioRegistro,
     postFormularioRegistro
} = require('../controllers/user')

// rutas: GET
router.get('/registro', getFormularioRegistro)

// rutas: POST
router.post('/registro', postFormularioRegistro)

module.exports = router