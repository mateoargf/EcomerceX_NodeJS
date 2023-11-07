const getFormularioRegistro = (req, res) => {
     res.status(200).render('pages/registro')
}

module.exports = {
     getFormularioRegistro
}