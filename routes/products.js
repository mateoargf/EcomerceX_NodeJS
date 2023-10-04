const Router = require('express')
const router = Router()

const { getAllProduct, getAllProductStatic } = require('../controllers/products')

router.route('/').get(getAllProduct)
router.route('/estatico').get(getAllProductStatic)

module.exports=router