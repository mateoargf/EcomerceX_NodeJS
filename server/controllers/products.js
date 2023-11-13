// usamos propiedades de mongoose para enviar, actualizar, obtener o eliminar datos de la db
const mongoose = require('mongoose')
// modelos productos
const Campera = require('../models/camperas')

// jsons productos
const camperaData = require('../jsons/camperas.json')

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

// enviamos los productos a la coleccion productos
const postAllProduct = async(req, res) => {
     // camperas envio
     try {
          const resultado = await Campera.insertMany(camperaData)
          console.log(`JSON enviado con éxito ${resultado}`)
     } catch(error) {
          console.log(`Error al enviar los datos ${error}`)
     } finally {
          mongoose.disconnect()
     }
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