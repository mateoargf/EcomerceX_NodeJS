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

const getHydro = async (req, res) => {
     const productId = req.params.id;

     // Función auxiliar para buscar un producto por ID en la colección
     async function findProductById(id, collections) {
          for (const collection of collections) {
               const foundProduct = await collection.findOne({ _id: id });
               if (foundProduct) {
                    return foundProduct;
               }
          }
          return null;
     }

     try {
          const [camperas, mochilas, pantalones, remeras, zapatillas] = await Promise.all([
               Campera.find({}),
               Mochila.find({}),
               Pantalon.find({}),
               Remera.find({}),
               Zapatilla.find({})
          ]);

          const product = await findProductById(productId, [camperas, mochilas, pantalones, remeras, zapatillas]);

          if (product) {
               res.render('pages/hydroShoes', { product });
          } else {
               res.render('pages/err404');
          }
     } catch (error) {
          console.log(`Error al buscar el producto: ${error}`);
          res.status(500).json({ error: 'Error al obtener productos' });
     }
};

const getAllProduct = async (req, res, next) => {
     // crear primero las colecciones de productos
     try {
          // Obtener todos los productos simultáneamente
          const [camperas, mochilas, pantalones, remeras, zapatillas] = await Promise.all([
               Campera.find({}),
               Mochila.find({}),
               Pantalon.find({}),
               Remera.find({}),
               Zapatilla.find({})
          ]);

          const productos = {
               remeras: {
                    destacada: remeras[0],
                    otros: [remeras[1], remeras[2]]
               },
               pantalones: {
                    destacada: pantalones[0],
                    otros: [pantalones[1], pantalones[2]]
               },
               mochilas: {
                    destacada: mochilas[0],
                    otros: [mochilas[1], mochilas[2]]
               },
               camperas: {
                    destacada: camperas[0],
                    otros: [camperas[1], camperas[2]]
               },
               zapatillas: {
                    destacada: zapatillas[0],
                    otros: [zapatillas[1], zapatillas[2]]
               }
          };

          //res.render('partials/newcollection', { camperas, mochilas, pantalones, remeras, productos })

          res.locals.productos = productos;
          res.locals.remeras = remeras;
          res.locals.pantalones = pantalones;
          res.locals.mochilas = mochilas;
          res.locals.camperas = camperas;
          res.locals.zapatillas = zapatillas;

          next();
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