const Router = require('express')
const router = Router()

const {
     getAllProduct,
     getHydro,
     getMoreFrom,
     getCheckPage,
     getWishList,
     getLogin,
     getAllGroup,
     getCategory
} = require('../controllers/products')

// rutas
router.get('/', getAllProduct)
router.get('/hydro', getHydro)
router.get('/group', getAllGroup)
router.get('/morefrom', getMoreFrom)
router.get('/checkPage', getCheckPage)
router.get('/wishlist', getWishList)
router.get('/login', getLogin)
router.get('/category', getCategory)
// router.get('/articulo/:id', getSelectedProduct)
// router.post('/crear', postAllProduct)
// router.delete('/eliminar/:id', deleteAllProduct)

module.exports = router