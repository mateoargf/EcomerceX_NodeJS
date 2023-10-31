const Router = require('express')
const router = Router()

const {
     getAllProduct,
     getHydro,
     getAllCategory,
     getMoreFrom
} = require('../controllers/products')

// rutas
router.get('/', getAllProduct)
router.get('/hydro', getHydro)
router.get('/category', getAllCategory)
router.get('/morefrom, getMoreFrom')
// router.get('/articulo/:id', getSelectedProduct)
// router.post('/crear', postAllProduct)
// router.delete('/eliminar/:id', deleteAllProduct)

module.exports = router