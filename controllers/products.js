const getHydro = (req, res) => {
     res.status(200).render('pages/hydroShoes')
}

const getAllProduct = (req, res) => {
     res.status(200).json({ msg: 'probando testeando rutas DOS' })
}

const getAllGroup = (req, res) => {
     res.status(200).render('pages/mockups')
}
module.exports = {
     getAllProduct,
     getHydro,
     getAllGroup
}