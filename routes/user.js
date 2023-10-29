const Router = require('express')
const router = Router()

// asignamos las funciones de controllers a routes
const {
     getFormulario
} = require('../controllers/user')

// rutas
router.get('/form', getFormulario)

module.exports = router