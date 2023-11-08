const Router = require('express')
const router = Router()

// asignamos las funciones de controllers a routes
const {
     getFormularioRegistro
} = require('../controllers/user')

// rutas:
router.get('/registro', getFormularioRegistro)

module.exports = router