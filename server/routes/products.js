const Router = require('express')
const router = Router()

const {
     getAllProduct,
     getHydro,
     getNewCollection,
     // getMoreFrom,
     getCheckPage,
     getWishList,
     getLogin,
     getAllGroup,
     getCategory,
     postAllProduct,
     deleteAllProduct
} = require('../controllers/products')

// rutas.get
router.get('/todos', getAllProduct)
router.get('/hydro', getHydro)
router.get('/group', getAllGroup)
router.get('',getNewCollection)
// router.get('/morefrom', getMoreFrom)
router.get('/checkPage', getCheckPage)
router.get('/wishlist', getWishList)
router.get('/login', getLogin)
router.get('/category', getCategory)
router.post('/crear', postAllProduct)
router.delete('/eliminar', deleteAllProduct)
// router.get('/articulo/:id', getSelectedProduct)
// router.delete('/eliminar/:id', deleteAllProduct)

module.exports = router