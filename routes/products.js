const Router = require('express')
const router = Router()

const { getAllProduct, getAllProductStatic, getHydro } = require('../controllers/products')

// rutas
router.route('/').get(getAllProduct)
router.route('/hydro').get(getHydro)
router.route('/estatico').get(getAllProductStatic)


module.exports=router