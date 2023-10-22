const getAllProductStatic = (req, res) => {
     res.status(200).json({ msg: 'probando testeando rutas UNO' })
}

const getHydro = (req, res) => {
     res.render('pages/hydroShoes')
}

const getAllProduct = (req, res) => {
     res.status(200).json({ msg: 'probando testeando rutas DOS' })
}

module.exports = { getAllProduct, getAllProductStatic, getHydro }