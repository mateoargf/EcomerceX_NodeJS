const getHydro = (req, res) => {
     res.status(200).render('pages/hydroShoes')
}

const getAllProduct = (req, res) => {
     res.status(200).json({ msg: 'probando testeando rutas DOS' })
}

const getAllGroup = (req, res) => {
     res.status(200).render('pages/productGroup')
}
const getMoreFrom = (req, res) => {
     res.status(200).render('pages/moreFrom')
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
module.exports = {
     getAllProduct,
     getHydro,
     getAllGroup,
     getMoreFrom,
     getCheckPage,
     getWishList,
     getLogin,
     getCategory
}