const getHydro = (req, res) => {
     res.status(200).render('pages/hydroShoes')
}

const getAllProduct = (req, res) => {
     res.status(200).json({ msg: 'probando testeando rutas DOS' })
}

const getAllCategory = (req, res) => {
     res.status(200).render('pages/category')
}
const getMoreFrom = (req, res) => {
     res.status(200).render('pages/moreFrom')
}
module.exports = {
     getAllProduct,
     getHydro,
     getAllCategory,
     getMoreFrom
}