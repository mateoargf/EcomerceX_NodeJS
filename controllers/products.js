const getHydro = (req, res) => {
     res.status(200).render('pages/hydroShoes')
}

const getAllProduct = (req, res) => {
     res.status(200).json({ msg: 'probando testeando rutas DOS' })
}

module.exports = {
     getAllProduct,
     getHydro
}