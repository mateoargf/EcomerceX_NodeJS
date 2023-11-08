const getFormularioRegistro = (req, res) => {
     res.status(200).render('pages/registro')
}

const postFormularioRegistro = async (req, res) => {
     // const {nombres modelo?}
}

module.exports = {
     getFormularioRegistro,
     postFormularioRegistro
}