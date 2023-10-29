const Router = require('express')
const router = Router()

// asignamos las funciones de controllers a routes
const {
     get404
} = require('../controllers/err')

// rutas:
router.get('/404', get404)

module.exports = router