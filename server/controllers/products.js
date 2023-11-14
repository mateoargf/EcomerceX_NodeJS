// usamos propiedades de mongoose para enviar, actualizar, obtener o eliminar datos de la db
const mongoose = require('mongoose')
// accede a rutas de archivos
const path = require('path')
// modelos productos
const Campera = require('../models/camperas')
const Mochila = require('../models/mochilas')
const Pantalon = require('../models/pantalones')
const Remera = require('../models/remeras')
const Zapatilla = require('../models/zapatillas')

// jsons productos
const camperaData = require('../jsons/camperas.json')
const mochilaData = require('../jsons/mochilas.json')
const pantalonData = require('../jsons/pantalones.json')
const remeraData = require('../jsons/remeras.json')
const zapatillaData = require('../jsons/zapatillas.json')

const getHydro = (req, res) => {
     res.status(200).render('pages/hydroShoes')
}

const getAllProduct = async (req, res) => {
     // crear primero las colecciones de productos
     try {
          // Obtener todos los productos de cada colección
          const camperas = await Campera.find({});
          const mochilas = await Mochila.find({});
          const pantalones = await Pantalon.find({});
          const remeras = await Remera.find({});
          const zapatillas = await Zapatilla.find({});

          // Destructuring de los atributos
          const productos = {
               allCamperas: camperas.map(({ _id, marca, modelo, imagen, talle, color, precio, descripción, categoría, valoraciones }) => ({ _id, marca, modelo, imagen, talle, color, precio, descripción, categoría, valoraciones })),
               allMochilas: mochilas.map(({ _id, marca, modelo, imagen, capacidad, color, precio, descripción, categoría, valoraciones }) => ({ _id, marca, modelo, imagen, capacidad, color, precio, descripción, categoría, valoraciones })),
               allPantalones: pantalones.map(({ _id, marca, modelo, imagen, talle, color, precio, descripción, categoría, valoraciones }) => ({ _id, marca, modelo, imagen, talle, color, precio, descripción, categoría, valoraciones })),
               allRemeras: remeras.map(({ _id, marca, modelo, imagen, talle, color, precio, descripción, categoría, valoraciones }) => ({ _id, marca, modelo, imagen, talle, color, precio, descripción, categoría, valoraciones })),
               allZapatillas: zapatillas.map(({ _id, marca, modelo, imagen, talle, color, precio, descripción, categoría, valoraciones }) => ({ _id, marca, modelo, imagen, talle, color, precio, descripción, categoría, valoraciones }))
          };
          const newCollectionPath = path.join(__dirname, '../../views/partials/newCollection')
          res.render(newCollectionPath, { productos })

     } catch (error) {
          console.log(`Error al conectar ${error}`)
          res.status(500).json({ error: 'Error al obtener productos' })
     }
}

const getNewCollection = async (req, res) => {
     // crear primero las colecciones de productos
     // try {
     //      const resultado = await Productos.find({})
     //      res.json(resultado)
     // } catch (error) {
     //      console.log(`Error al conectar ${error}`)
     // }
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
const postAllProduct = async (req, res) => {
     // envio camperas
     // try {
     //      const resultado = await Campera.insertMany(camperaData)
     //      console.log(`JSON enviado con éxito ${resultado}`)
     // } catch(error) {
     //      console.log(`Error al enviar los datos ${error}`)
     // }

     // envio mochilas
     // try {
     //      const resultado = await Mochila.insertMany(mochilaData)
     //      console.log(`JSON enviado con éxito ${resultado}`)
     // } catch(error) {
     //      console.log(`Error al enviar los datos ${error}`)
     // }

     // envio pantalones
     // try {
     //      const resultado = await Pantalon.insertMany(pantalonData)
     //      console.log(`JSON enviado con éxito ${resultado}`)
     // } catch(error) {
     //      console.log(`Error al enviar los datos ${error}`)
     // }

     // envio remeras
     // try {
     //      const resultado = await Remera.insertMany(remeraData)
     //      console.log(`JSON enviado con éxito ${resultado}`)
     // } catch(error) {
     //      console.log(`Error al enviar los datos ${error}`)
     // }

     // envio zapatillas
     // try {
     //      const resultado = await Zapatilla.insertMany(zapatillaData)
     //      console.log(`JSON enviado con éxito ${resultado}`)
     // } catch(error) {
     //      console.log(`Error al enviar los datos ${error}`)
     // }
}

// eliminamos productos de la coleccion
const deleteAllProduct = async (req, res) => {
     // eliminamos los productos de campera
     //      try{
     //           const resultado = await Campera.deleteMany({})
     //           console.log(`Se eliminó con éxito ${resultado}`)
     //      }catch(error){
     //           console.log(`No pudimos eliminar ${error}`)
     //           res.status(500).json({ error: 'Error interno del servidor' })
     //      }
}

module.exports = {
     getAllProduct,
     getHydro,
     getAllGroup,
     getNewCollection,
     // getMoreFrom,
     getCheckPage,
     getWishList,
     getLogin,
     getCategory,
     postAllProduct,
     deleteAllProduct
}