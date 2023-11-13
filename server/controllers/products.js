const getHydro = (req, res) => {
     res.status(200).render('pages/hydroShoes')
}

const getAllProduct = (req, res) => {
     res.status(200).json({ msg: 'probando testeando rutas DOS' })
}

const getAllGroup = (req, res) => {
     res.status(200).render('pages/productGroup')
}

const getCheckPage = (req, res) => {
     res.status(200).render('pages/checkPage')
}
const getWishList = (req, res) => {
     res.status(200).render('pages/wishlist')
}
const getLogin = (req, res) => {
     res.status(200).render('pages/login')
}
const getCategory = (req, res) => {
     res.status(200).render('pages/category')
}

const postAllProduct = (req, res) => {
     res.status(200).json({msg:'crear productos'})
}

module.exports = {
     getAllProduct,
     getHydro,
     getAllGroup,
     // getMoreFrom,
     getCheckPage,
     getWishList,
     getLogin,
     getCategory,
     postAllProduct
}