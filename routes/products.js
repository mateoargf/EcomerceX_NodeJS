const Router = require('express')
const router = Router()

const {
     getAllProduct,
     getHydro,
     getAllGroup
} = require('../controllers/products')

// rutas
router.get('/', getAllProduct)
router.get('/hydro', getHydro)
router.get('/group', getAllGroup)
// router.get('/articulo/:id', getSelectedProduct)
// router.post('/crear', postAllProduct)
// router.delete('/eliminar/:id', deleteAllProduct)

module.exports = router